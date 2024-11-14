/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const emailRustore = constant.loginRustore

const prevDaysDate = constant.prevDaysDate;

describe('Top Charts should be alive and main requests should response 200', function () {
   
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('"Top Charts" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/top-charts/rustore',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.results).not.be.empty;
            })
    });

    it('List Type "Apps" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/top-charts/?device_type=rustore&length=20&list_type=apps&start=0&store_id=MAIN&timestamp=' + prevDaysDate,
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

    it('List Type "Games" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/top-charts/?device_type=rustore&length=20&list_type=games&start=0&store_id=GAMES&timestamp=' + prevDaysDate,
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
});


