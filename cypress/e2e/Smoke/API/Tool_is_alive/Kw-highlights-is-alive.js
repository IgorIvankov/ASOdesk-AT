/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Keyword Highlights should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('KA "Keyword Highlights" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/1336519654/keyword-analysis/keyword-highlights/?from_timestamp=1621630800&to_timestamp=1624395599&countries=&keyword_storetype=iphone',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body['us']).not.be.empty;
            })
    });

});
