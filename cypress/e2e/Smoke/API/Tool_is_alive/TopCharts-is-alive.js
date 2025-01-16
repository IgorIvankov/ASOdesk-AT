/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.AllFavCountryIds;

const toDaysDate = constant.toDaysDate_topChart;

describe('Top Charts AppStore is alive', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {

        it('Top Charts AS APPS type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=iphone&length=20&list_type=free&start=0&store_id=3600&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts AS APPS type paid in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=iphone&length=20&list_type=paid&start=0&store_id=3600&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts AS GAMES type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=iphone&length=20&list_type=free&start=0&store_id=6014&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts AS GAMES type paid in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=iphone&length=20&list_type=paid&start=0&store_id=6014&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });
    }   
    
});

describe('Top Charts GP is alive', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {

        it('Top Charts GP APPS type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=free&start=0&store_id=APPLICATION&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts GP APPS type paid in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=paid&start=0&store_id=APPLICATION&timestamp=' + toDaysDate,
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

        it('Top Charts GP APPS type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=grossing&start=0&store_id=APPLICATION&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts GP GAMES type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=free&start=0&store_id=GAME&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts GP GAMES type paid in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=paid&start=0&store_id=GAME&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });

        it('Top Charts GP GAMES type free in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-charts/?device_type=googleplay&length=20&list_type=grossing&start=0&store_id=GAME&timestamp=' + toDaysDate,
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.data.results).to.not.be.empty;
                    expect(response.body.data.results).to.have.length.greaterThan(0);
                })
        });
    }   
    
});
