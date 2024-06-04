/// <reference types="cypress" />
import { Auth } from "../../../Service_new/Classes_library/Auth";
import { Constants } from "../../../Service_new/Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore


describe('Competitors should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    it('data-competitors should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + app + '/data-competitors',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });

});