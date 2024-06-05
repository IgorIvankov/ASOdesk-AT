import {Constants} from "./Constants";

export class Auth {
    constant = new Constants();
    token = null;
    session = null;

    /////// This section use front-end ////////

    signIn(Email, url) {
        if (url != null) {
            cy.visit(url);
        } else {
            cy.visit('/accounts/login/');
        }

        if (Email != null) {
            cy.get('input[name="email"]')
                .type(Email).should('have.value', Email)
            cy.get('input[name="password"]')
                .type(this.constant.password).should('have.value', this.constant.password)
            cy.get('.buttonElement--primary').should('not.be.disabled').click()
        } else {
            cy.get('input[name="email"]')
                .type(this.constant.login).should('have.value', this.constant.login)
            cy.get('input[name="password"]')
                .type(this.constant.password).should('have.value', this.constant.password)
            cy.get('.buttonElement--primary').should('not.be.disabled').click()
            cy.get('.dashboardAppCard').should('be.visible')
        }


        //if the content on page is visible then get the cookies
        //cause we need a delay to get complete data, before send request
    };

    hijack(Email) {

        if (Email != null) {
            cy.visit('/' + 'hijack/email/' + Email + '/');

        } else {
            cy.visit('/' + 'hijack/email/' + this.constant.login + '/');
        }
    };

    signUp(Email) {
        cy.visit('/accounts/login/');
        cy.get('a').contains('Sign Up').click();
        cy.get("[name=first_name]").type(this.constant.name)
        cy.get("[name=email]").type(Email).trigger('change');
        // use the email address from mailslurp
        // cy.get("[name=company]").type('test company');
		cy.contains('div', 'country', {matchCase:false}).type('Russia{Enter}');
        // cy.contains('div', 'Job title', {matchCase: false}).click();
        // cy.contains('div', 'Other', {matchCase: false}).click();
        cy.get("[name=password1]").type(this.constant.password).trigger('change');
        cy.get('[data-testid="checkbox-agreement"]').children('.tb-checkbox__body').click();
        // cy.get('[data-testid="checkbox-privacy"]').children('.tb-checkbox__body').click();
        // click the submit button
        cy.get('.buttonElement--primary').should('not.has.class', '.buttonElement--disabled').click();
        cy.wait(3000);
    };

    getToken() {
        cy.getCookie('Authorization')
            .should('exist')
            .then((cookie) => {
                this.token = cookie.value;
            })

        cy.getCookie('sessionid')
            .should('exist')
            .then((cookie) => {
                this.session = cookie.value
            })
    };

    /////// This section use API ////////

    obtain(Email) {
        cy.request({
            method: 'POST',
            url: 'https://hq.asodesk.com/api/auth/obtain', // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                username: Email == null ? this.constant.login : Email,
                password: this.constant.password,
            }
        })
            .then((response) => {
                assert.equal(response.status, 200);
                let jsonData = response.body;
                this.token = 'Token: ' + jsonData.access;
                chai.expect(this.token).to.not.be.eq(null);
            })
    }
}
