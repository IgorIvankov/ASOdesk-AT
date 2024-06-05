/// <reference types="cypress" />
import {Auth} from "../../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Plans should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200 ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/account/pricing',
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
            })
    });
    it('Plans list should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/settings/plans/',
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
