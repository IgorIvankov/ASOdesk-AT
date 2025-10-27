/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

const app = constant.applications.SGS.vtb
const emailSamsungGS = constant.loginSamsungGS



describe('Tag Analysis should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailSamsungGS);
    })
    it('Versions should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/versions/',
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

    it('tag-analysis-statistics should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/tag-analysis-statistics',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                countries: ['RU'],
                languages: ['ru'],
                storeid: app,
                time_since: constant.monthAgo,
                time_till: constant.toDaysDate,
                versions: [],
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });

    it('tag-analysis-tags-report" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/tag-analysis-tags-report',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                countries: ['RU'],
                languages: ['ru'],
                storeid: app,
                time_since: constant.monthAgo,
                time_till: constant.toDaysDate,
                versions: [],
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });

});