/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const emailRustore = constant.loginRustore

describe('Keyword Auto Suggestions should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    it('"most popular keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/ru.tinkoff.sme-rs/kas/most-popular-keywords?only_positive_ts=1&without_user_keywords=1',
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

    it('"competitor best keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/ru.tinkoff.sme-rs/kas/competitor-best-keywords?only_positive_ts=1&without_user_keywords=1',
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

    it('KaS "long tail keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/ru.tinkoff.sme-rs/kas/long-tail-keywords?only_positive_ts=1&without_user_keywords=1',
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

    it('"least competitive keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/ru.tinkoff.sme-rs/kas/least-competitive-keywords?only_positive_ts=1&without_user_keywords=1',
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
