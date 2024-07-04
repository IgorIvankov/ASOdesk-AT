/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();
let AppUrl = null;
let AppId = null;
let keywordId = null;

describe('Search & Track/UnTrack Application should be alive and requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Tracked App should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/tracked-apps?country=ru',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.empty;
                AppId = response.body.results[0].store_id;
            })
    });
    it('Add keywords should response 200 and contain success: added', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + AppId + '/add-keywords',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                "keywords": ["инвестиции в плюс"],
                "color_id": 0,
                "tab_id": null
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.success).to.be.contain('added');


            })
    });
    it('Find keyword_ids in data-stats should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + AppId + '/keyword-analytics/data-stats',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                let keywordData = response.body.data.find(item => item.keyword === "инвестиции в плюс")
                expect(keywordData).not.be.empty;
                keywordId = keywordData.id
            })
    });
    it('Remove keywords should response 200 and contain success: removed ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + AppId + '/remove-keywords',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                "keyword_ids": [keywordId],
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.success).to.be.contain('removed');
            })
    });
});
