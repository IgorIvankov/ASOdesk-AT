/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

const app = constant.applications.GP.pinterest

const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

describe('App Profile should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
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

    // Depricated request. Now it included in /metrics

    // it('total-views should response 200 and not be empty', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: 'api/es/' + app + '/total-views',
    //         headers: {
    //             'accept': 'application/json',
    //             'Authorization': auth.token,
    //         },
    //         response: [],
    //     })
    //         .then((response) => {
    //             expect(response.status).eq(200);
    //             expect(response.body).not.be.eq(0).and.not.be.undefined;
    //         })
    // });

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
                expect(response.body.avg_search_cr).not.be.null;
                expect(response.body.category_ranking_today).not.be.null;
                expect(response.body.monthly_search_impressions).not.be.null;
                expect(response.body.monthly_total_installs).not.be.null;
                expect(response.body.ranked_keywords_count).not.be.null;
                expect(response.body.rating).not.be.null;
                expect(response.body.rating_count).not.be.null;
                expect(response.body.top_keywords).not.be.null;
                expect(response.body.top_languages).not.be.null;
            })
    });

    it('featured-reviews should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/featured-reviews/?country=ru',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
                expect(response.body[0].featured_reviews).not.be.empty;

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