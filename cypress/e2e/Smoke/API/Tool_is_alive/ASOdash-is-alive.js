/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const prevDaysDate = constant.s_prevDaysDate;
const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

describe('ASO dashboard should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('ASO dashboard "impressions, units" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/1336519654/dashboard?country=vn&metrics=impressionsTotalUnique,units&time_since=' + monthAgo + '&time_till=' + toDaysDate,
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                if (response.body.is_connected) {
                    expect(response.body.impressionsTotalUnique).not.be.empty;
                    expect(response.body.units).not.be.empty;
                } else {
                    cy.log(assert.equal(response.body.is_connected, true,'Skip this test because ASC isn\'t connected'));
                }

            })
    });
});
