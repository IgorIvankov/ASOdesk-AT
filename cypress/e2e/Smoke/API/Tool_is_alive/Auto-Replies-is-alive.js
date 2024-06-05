/// <reference types="cypress" />
import { Auth } from "../../Service_new/Classes_library/Auth";
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

describe('Auto-Replies should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })

    it('review-tag should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/review-tag/structure/',
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

    it('auto-reply-rules should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/auto-reply-rules/',
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

    it('review-teplates should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/review-templates/dirs/',
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