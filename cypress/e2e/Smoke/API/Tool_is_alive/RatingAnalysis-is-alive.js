/// <reference types="cypress" />
import { Auth } from "../../Service_new/Classes_library/Auth";
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

const app = constant.applications.GP.pinterest

describe('Rating Analysis Board should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })

    it('rating-analysis should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/rating-analysis/country-breakdown/?is_cumulative=1',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                start_date: constant.monthAgo,
                end_date: constant.toDaysDate,
                countries: [constant.GpFavCountryIds[4].toUpperCase()],
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
});    