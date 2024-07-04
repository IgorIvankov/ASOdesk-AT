/// <reference types="cypress" />
import {Auth} from "../../../../Classes_library/Auth";

const auth = new Auth();

describe('Custom reports should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/reports-alerts',
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
    it('Custom reports list should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/custom-reports/api/channel/list/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {

                expect(response.status).eq(200)

            })
    });
});
