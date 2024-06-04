/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const emailRustore = constant.loginRustore


describe('Integrations should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('"rustore-provider" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/rustore-provider/',
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