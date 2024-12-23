/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.GpFavCountryIds;
const favStoreIds = constant.GpFavStoreIds;

const startPrevDayDate = constant.startPrevDayDate;
const endPrevDayDate = constant.endPrevDayDate;

describe('Healthy check ASO Comparative Report Chart', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let storeId of favStoreIds) {
        context('Check App by Store id: ' + storeId, () => {

            for (let country of favCountryIds) {

                it('Check App in Locale: ' + country.toUpperCase(), () => {
                    cy.request({
                        method: 'GET',
                        followRedirect: true, log: true, //turn off
                        url: 'api/' + country + '/' + storeId + '/comparative-report-chart?time_since=' + startPrevDayDate + '&time_till=' + endPrevDayDate,
                        headers: {
                            'accept': 'application/json',
                            'Authorization': auth.token,
                            // 'sessionid': '' + auth.session //sessionid from cookies
                        },
                        response: []
                    })
                        .then((response) => {
                            assert.equal(response.status, 200);
                            for (let j = 0; j <= response.body.data.length - 1; j++) {
                                let monthData = response.body.data[j];
                                let counter = (monthData.data["1"] + monthData.data["2-5"] + monthData.data["6-10"] + monthData.data["11-20"] + monthData.data["21-50"] + monthData.data["51-100"]);
                                context('Find me a worsest day', () => {
                                    //Check three last days
                                    counter === 0 ? assert.equal(counter, !0, 'Sum of Top Keywords be equals ' + counter) : cy.log('Everything is OK! Sum of Top Keywords equals ' + counter)

                                });
                            }
                        })
                })
            }
        })
    }
});