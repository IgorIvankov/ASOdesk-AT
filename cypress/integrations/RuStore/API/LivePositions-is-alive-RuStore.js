/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const emailRustore = constant.loginRustore


describe('Keyword Explorer should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    it(' "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ru&device=rustore&keyword=tinkoff&length=20&start=0&remember=true&storeid=ru.tinkoff.sme-rs',
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

    it(' "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/keyword-explorer/keyword-suggestions?country=ru&device=rustore&keyword=tinkoff&storeid=ru.tinkoff.sme-rs',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.suggestions).not.be.empty;
            })
    })

    it(' "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/keyword-explorer/statistics?storeid=ru.tinkoff.sme-rs&country=ru&keyword=tinkoff&device=rustore',
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
    })
})
