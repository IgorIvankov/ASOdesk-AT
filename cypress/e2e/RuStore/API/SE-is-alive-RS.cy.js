/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const toDaysDate = constant.toDaysDate;
const monthAgo = constant.monthAgo;

const emailRustore = constant.loginRustore


describe('Search Explorer should be alive and main requests should response 200', function () {
    
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('SE RuStore "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ru&device=rustore&keyword=tinkoff&length=20&start=0&remember=true',
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

    it('SE RuStore "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=ru&device=rustore&keyword=tinkoff',
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

    it('SE RuStore "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=ru&keyword=tinkoff&device=rustore',
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

    it('SE RuStore "positions-history" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/positions-history?applocales=656211240,656210752,656211454,656211437,656211600,656211623,652938733,656211060,656211451,656250989,656211525,656211575,656253022,656211108,656211607,656210437,656211484,656249467,656252960,656254328&device=rustore&keyword=tinkoff',            
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

    it('SE RuStore "traffic-score" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/history/traffic-score/?time_since=' + monthAgo + '&time_till=' + toDaysDate + '&keyword_ids=128876892',
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