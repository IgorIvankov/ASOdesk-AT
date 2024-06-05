/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";
import { Constants } from "../../Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore

describe('OR should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    it('OR "organic report" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/organic-report',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('OR "comparative report basic" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/comparative-report-basic',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data["21-50"]).not.be.eq(0);
            })
    });

    it('OR "organic report history" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/organic-report-history?interval=30d',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data.total[0][1]).not.be.eq(0);
            })
    });

});
