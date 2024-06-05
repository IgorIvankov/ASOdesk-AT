/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";
import {Constants} from "../../Service_new/Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const prevDaysDate = constant.prevDaysDate;
const toDaysDate = constant.toDaysDate;
const app = constant.applications.AS.snapchat

describe('CR should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('CR "comparative report chart" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/comparative-report-chart?time_since=' + prevDaysDate + '&time_till=' + toDaysDate,
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.data).not.be.eq(0);
                expect(response.body.data).not.be.eq(null);
                expect(response.body.data).not.be.empty;
            })
    });

    it('CR "Comparative report table" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/comparative-report?from_timestamp=' + prevDaysDate + '&to_timestamp=' + toDaysDate,
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

    it('CR "Comparative report meta" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/' + app + '/comparative-report-metas?from_timestamp=' + prevDaysDate + '&to_timestamp=' + toDaysDate,
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.first).not.be.empty;
                expect(response.body.second).not.be.empty;
            })
    });

});
