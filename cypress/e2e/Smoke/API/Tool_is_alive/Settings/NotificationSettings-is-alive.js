/// <reference types="cypress" />
import {Auth} from "../../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Notification Settings should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })

    it('Html page should response 200 ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/account/notifications',
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

    it('"notifications" should response 200', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/settings/api/notifications',
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

});
