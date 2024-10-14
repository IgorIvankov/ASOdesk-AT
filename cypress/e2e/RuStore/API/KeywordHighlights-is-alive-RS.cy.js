/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore

const toDaysDate = constant.toDaysDate;
const monthAgo = constant.monthAgo;

describe('Keyword Highlights should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })
    it('"Keyword Highlights" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/' + app + '/keyword-analysis/keyword-highlights/?from_timestamp=' + monthAgo + '&to_timestamp=' + toDaysDate + '&countries=RU',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body['ru']).not.be.empty;
            })
    });

});
