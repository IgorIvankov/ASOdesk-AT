import {Commands} from "../../../Classes_library/Commands";
import {Auth} from "../../../Classes_library/Auth";

const command = new Commands();
const auth = new Auth();

beforeEach("Ignore exeptions", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.message) {
        return false;
      }
    });
});

describe("Sign up, onboarding and product tour", function () {
    before(function () {
        cy.createEmailInbox().then(inbox => {
            cy.wrap(inbox.email).as('emailAddress');
            cy.wrap(inbox.token).as('emailToken');
        });
    });

    it('01 - can sign up with email', function () {
        chai.expect(this.emailAddress).to.contain("@");
        // visit the application with generated email
        auth.signUp(this.emailAddress);
    });

    it('02 - can receive confirmation code and activate account', function () {
        auth.signIn(this.emailAddress);
        cy.wait(30000);
        cy.waitForLatestEmail(this.emailToken, 60000)
            .then(email => {
                const emailBody = email.html || email.text || '';
                const code = new RegExp('\\d{4}</h4>').exec(emailBody);

                expect(code).to.exist;

                cy.get('[data-id="0"]').type(code[0].slice(0, 4), { delay: 100 })
                    .then(() => {
                        cy.contains('Incorrect code entered').should('not.exist');
                    });
            });
        auth.getToken()
    });


    it('Onboarding steps', function () {
        
        auth.signIn(this.emailAddress);

        //"Let's get to know you"
        cy.get('#companyName').type('Test Company Name');
        cy.get('input[value="Project Management"]').click();
        cy.get('input[name="role-other"]').type('QA');
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 w-full"]').click();          

        //"Almost done"
        cy.get('input[value="2 - 5"]').click();
        cy.get('input[value="50 - 99"]').click();
        cy.get('input[value="6 - 20"]').click();
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 w-full"]').click();          

        //"The last one"
        cy.get('input[value="YouTube"]').click();
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 w-full"]').click();          

        //The beginer's guide
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 w-full mb-8"]').click();

        //Select store country
        cy.get('button[class="driver-popover-next-btn"]').click();

        //Track your first app
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('google');
        cy.wait(10000)
        cy.contains('Google').eq(0).click();

        //Global navigation. Aso Tools
        cy.wait(5000)
        cy.get('span[data-testid="icon-aso-tools"]').click();

        //Local Navigation and Tools
        cy.wait(5000)
        cy.contains('Google');
        cy.contains('Keywords').click();
        cy.contains('Find & Track').click();

        //Posibilities of Asodesk
        cy.wait(5000)
        cy.contains('Track keyword positions with Keyword Ranking Chart, find and manage the best keywords for your app with Keyword Manager and Keyword Table');
        cy.get('button[class="driver-popover-next-btn"]').click();

        //Reviews & Ratings
        cy.wait(5000)
        cy.contains('Universal tool to work with your users');
        cy.get('button[class="driver-popover-next-btn"]').click();

        //Stores Analytics
        cy.wait(5000)
        cy.contains('Browse and compare real-time search results across different app stores');
        cy.get('button[class="driver-popover-next-btn"]').click();       

        //Connections Hub
        cy.wait(5000)
        cy.contains('All Reports Settings');
        cy.get('button[class="driver-popover-next-btn"]').click();  

        //Keyword Boost
        cy.wait(5000)
        cy.contains('Get app installs to reach the top');
        cy.get('button[class="driver-popover-next-btn"]').click();  

        //Schedule a demo
        cy.wait(5000)
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--secondary buttonElementNew--md rounded-4 w-full"]').click();          

        //"Find a perfect fit for you"
        cy.wait(5000)
        cy.get('button[id="gm-get-trial-basicguru aso"]').click();          

        //Welcome on Board
        cy.wait(5000)
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 w-full"]').click();          
        // //Welcome offer
        // cy.wait(5000)
        // cy.get('[data-testid="icon-cross"]').click();
    }); 

    it('04 - can reset password by email', function () {
        cy.visit('/accounts/login/');
        command.forgotPassword(this.emailAddress)
        cy.waitForLatestEmail(this.emailToken, 60000)
            .then(email => {
                const emailBody = email.html || email.text || '';
                const resetLinkPart = new RegExp('accounts/password/reset/key/.{30}').exec(emailBody);

            expect(resetLinkPart).to.exist;

            cy.visit("/" + resetLinkPart[0]);
            cy.wait(1000);
            command.changeForgottenPassword();
        });
    });

    it('05 - can change password in profile', function () {
        cy.setCookie('Authorization', auth.token);
        cy.visit('/accounts/login/');
        command.changePassword()
    });

    it('06 - can delete user', function () {
        // delete the user
        auth.signIn(this.emailAddress);
        command.deleteUser()
    });

});