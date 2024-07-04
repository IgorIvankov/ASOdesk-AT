/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const toDaysDate = constant.toDaysDate;
const monthAgo = constant.monthAgo;


describe('Search Explorer should alive and main requests should response 200', function () {
    
    it('SE AS "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=iphone&keyword=sport&length=20&start=0&remember=true',
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

    it('SE GP "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=google&keyword=sport&length=20&start=0&remember=true',
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

    it('SE AS "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=US&device=iphone&keyword=sport',
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

    it('SE GP "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=ES&device=google&keyword=sport',
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

    it('SE AS "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=iphone',
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

    it('SE GP "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=google',
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

    it('SE AS "positions-history" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/positions-history?applocales=618044883,557943576,531654346,577879481,515915074,185921499,266686872,628909534,485119164,289235489,610083917,557349349,595738164,365455915,563547589,617953946,617130442,434663192,589622761,593475296&device=iphone&keyword=ai',            
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

    it('SE GP "positions-history" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/positions-history?applocales=625312448,563559835,566342616,436093618,287039696,601132311,2993936,602595389,558083727,587009222,633558961,594916267,618087585,317114207,614235382,600408648,581235890,269950406,591672691,603541416&device=google&keyword=ai',
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

    it('SE AS "traffic-score" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/history/traffic-score/?time_since=' + monthAgo + '&time_till=' + toDaysDate + '&keyword_ids=15146295',
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

    it('SE GP "traffic-score" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/history/traffic-score/?time_since=' + monthAgo + '&time_till=' + toDaysDate + '&keyword_ids=17350225',
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