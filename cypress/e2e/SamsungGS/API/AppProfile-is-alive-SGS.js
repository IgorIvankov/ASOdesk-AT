/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

const app = constant.applications.SGS.vtb
const emailSamsungGS = constant.loginSamsungGS


describe('App Profile should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailSamsungGS);
    })

    it('app-profile should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + app + '/app-profile',
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

    it('review-stats should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/review-stats',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });

    it('reviews-chart should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/reviews-chart',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                start: constant.monthAgo,
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });

    it('metrics should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/app-profile/metrics',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                is_demo: false,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
                expect(response.body.rating).not.be.null;               
            })
    });

    it('latest-reviews should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/ru/latest-reviews/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
                expect(response.body[0]).not.be.empty;

            })
    });



});