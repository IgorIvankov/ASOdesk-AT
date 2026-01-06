/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();
const app = constant.applications.AS.pinterest

const monthAgo = constant.monthAgo;
const toDaysDate = constant.toDaysDate;

describe('App Update Timeline should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })

    it('app-timeline should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/ES/' + app + '/app-timeline?from_timestamp=' + monthAgo +'&to_timestamp=' + toDaysDate + '&is_demo=false',
            
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.competitors).not.be.empty;
                expect(response.body.current_app).not.be.empty;
            })
    });

});
