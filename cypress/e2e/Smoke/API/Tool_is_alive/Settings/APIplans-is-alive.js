/// <reference types="cypress" />
import {Auth} from "../../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('API Plans should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200 ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/settings/api-pricing/',
            headers: {
                'accept': 'application/html+xml',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
            })
    });

});
