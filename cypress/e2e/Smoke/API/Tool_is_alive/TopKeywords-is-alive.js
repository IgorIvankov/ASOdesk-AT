/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.AllFavCountryIds;

describe('Top Keywords is alive', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {

        it('Check Top Keywords AppStore in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-keywords?store=appstore',
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

        it('Check Top Keywords GP in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/top-keywords?store=googleplay',
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
    }   
    
});