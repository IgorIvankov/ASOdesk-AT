/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore

describe('Find & Track should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    
    it('KM "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/keyword-analytics/suggestions',
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

    it('KM "competitor keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/keyword-analytics/suggestions/competitor-keywords/367003839',
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

    it('Chart "chart" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/keyword/128876892/chart?limit=2678400s',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.keywords).not.be.empty;
            })
    });

    it('TopApp "top apps" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/keyword/128876892/top-apps',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.phone.data).not.be.empty;
            })
    });

    it('Table "data stats" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/keyword-analytics/data-stats',
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

    // it('KA|Table "export history" should response 200 and not be empty ', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: 'api/history/sap/export/?time_since=1620594000&time_till=1623358799&keyword_ids=12045148',
    //         headers: {
    //             'accept': 'application/json',
    //             'Authorization': auth.token,
    //         },
    //         response: []
    //     })
    //         .then((response) => {
    //             expect(response.status).eq(200)
    //             expect(response.body.data).not.be.empty;
    //         })
    // });


});
