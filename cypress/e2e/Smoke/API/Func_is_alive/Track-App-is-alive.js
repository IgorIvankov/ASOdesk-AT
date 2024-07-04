/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();
let AppUrl = null;
let AppId = null;
describe('Search & Track/UnTrack Application should be alive and requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Search App should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/search-application?request_id=1627465316072&query=трек+номер',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.data).not.be.empty;
                AppUrl = response.body.data[0].url;
                AppId = response.body.data[0].store_id;
            })
    });
    it('Track App should response 200 and has success: tracked', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/track-app-by-url',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                "app_url": AppUrl,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.success).to.contain('tracked');
            })
    });
    it('UnTrack App should response 200 and has success: removed', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + AppId + '/untrack-app',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.success).to.contain('removed');
            })
    });
});
