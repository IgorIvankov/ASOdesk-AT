/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Keyword Shuffler should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Keyword Shuffler "free" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/1336519654/shuffle/free/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                combine_index: [1, 2, 3, 4],
                keywords: ["free", "fitness", "home", "app"]
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
                expect(response.body.total).not.be.eq(0);
            })
    });
});
