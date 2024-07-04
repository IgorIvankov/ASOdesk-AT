/// <reference types="cypress" />
import {Auth} from "../../../../Classes_library/Auth";

const auth = new Auth();

describe('Billing history should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200 ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/account/billing',
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
    it('invoices list should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/settings/invoices/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {

                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });
    it('Billing info should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/settings/billing-information/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {

                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });
    it('Recurring profile should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/recurring-profiles/',
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
