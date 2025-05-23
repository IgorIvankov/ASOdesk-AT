/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

const toDaysDate = constant.toDaysDate;
const monthAgo = constant.monthAgo;

const app = constant.applications.GP.pinterest

describe('Reviews & Replies Board should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })

    it('review-stats should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/es/' + app + '/review-stats?languages=en&start=' + monthAgo + '&end=' + toDaysDate + '&order=newest&featured=false&tag_search_type=any&countries=' + [constant.GpFavCountryIds[4].toUpperCase()] + '&without_tags=false',
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

    it('app-reviews should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/app-reviews?rating=1,2,3,4,5&languages=es&start=' + monthAgo + '&end=' + toDaysDate + '&order=newest&featured=false&tag_search_type=any&countries=' + [constant.GpFavCountryIds[4].toUpperCase()] + '&without_tags=false',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
                expect(response.body.results).not.be.empty;

            })
    });

});