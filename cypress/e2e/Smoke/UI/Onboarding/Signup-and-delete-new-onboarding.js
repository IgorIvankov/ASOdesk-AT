/// <reference types="cypress-mailslurp" />

import "cypress-mailslurp";
/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Commands} from "../../../Classes_library/Commands";

const command = new Commands();
const auth = new Auth();

beforeEach("Ignore exeptions", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.message) {
        return false;
      }
    });
});

describe("User case sign up, change password and delete account", function () {
    // use cypress-mailslurp plugin to create or use created an email address before test
    before(function () {
        return cy.mailslurp()
            // create new inbox
            .then(mailslurp => mailslurp.getInbox('e8ac4345-9a68-4227-b471-2aa0214701fd'))
            .then(inbox => {
                // save inbox id and email address to this (make sure you use function and not arrow syntax)
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });

    it('01 - can sign up with email', function () {
        // get wrapped email address and assert contains a mailslurp email address
        chai.expect(this.emailAddress).to.contain("@mailslurp");
        // visit the application with generated email
        auth.signUp(this.emailAddress);
    });

    it('02 - can receive confirmation code and activate account', function () {
        // app will send user an email containing a code, use mailslurp to wait for the latest email
        auth.signIn(this.emailAddress);
        cy.wait(30000);
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                this.inboxId, 5000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('\\d{4}</h4>').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.get('[data-id="0"]').type("" + code.slice(0, 4), { delay: 100 })
                    .then(() => {
                        cy.contains('Incorrect code entered').should('not.exist')
                    })
            })
        auth.getToken()


    });

    it('03 - skip onboarding steps', function () {
        cy.setCookie('Authorization', auth.token);
        cy.visit('/')
        // auth.signIn(this.emailAddress);

        //"Let's get to know you"
        cy.get('input[id="companyName"]').type('Test Company Name');
        cy.get('input[value="Project Management"]').click();
        cy.get('input[name="role-other"]').type('QA');
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();

        //"Almost done"
        cy.get('input[value="2 - 5"]').click();
        cy.get('input[value="50 - 99"]').click();
        cy.get('input[value="6 - 20"]').click();
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();

        //"The last one"
        cy.get('input[value="YouTube"]').click();
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();

        //Skip The beginer's guide
        cy.get('button[class="buttonElement buttonElement--secondary buttonElement--md buttonElement--no-border rounded-4 w-full"]').click();
        
        //Schedule a demo
        cy.get('button[class="buttonElement buttonElement--secondary buttonElement--md rounded-4 w-full"]').click();        

        //"Find a perfect fit for you"
        cy.get('button[id="gm-get-trial-guruaso"]').click();          

        //Welcome on Board
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();          

    });


    it('04 - can reset password by email', function () {
        cy.visit('/accounts/login/');
        command.forgotPassword(this.emailAddress)
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                this.inboxId, 30000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('accounts/password/reset/key/.{30}').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.visit("/" + code);
                cy.wait(1000);
                command.changeForgottenPassword()
            })
    });

    it('05 - can change password in profile', function () {
        cy.setCookie('Authorization', auth.token);
        cy.visit('/accounts/login/');
        command.changePassword()
        //delete inbox after all jobs with it have finished
        // cy.mailslurp().then(mailslurp => mailslurp.deleteInbox(this.inboxId))
    });

    it('06 - can delete user', function () {
        // set cookie to continue and delete the user
        cy.setCookie('Authorization', auth.token);
        cy.visit('/');
        command.deleteUser()
    });

});
