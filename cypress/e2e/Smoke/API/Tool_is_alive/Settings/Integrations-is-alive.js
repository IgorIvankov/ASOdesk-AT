/// <reference types="cypress" />
import {Auth} from "../../../../Classes_library/Auth";

const auth = new Auth();

describe('Integrations should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/settings/integrations',
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
    it('ASC should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/app-store-connect-provider/',
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
    it('GPC should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/google-play-provider/',
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
    it('Zendesk should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'zendesk/api/internal/api_integration/settings/',
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
    it('Omnidesk should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/omnidesk/api/settings/',
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
