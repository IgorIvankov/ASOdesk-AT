/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore


describe('Reviews & Replies Board should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('review-stats should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/' + app + '/review-stats?start=' + monthAgo + '&end=' + toDaysDate + '&order=newest&featured=false&tag_search_type=any&countries=RU&without_tags=false',
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
            url: '/api/' + app + '/app-reviews?rating=1,2,3,4,5&start=' + monthAgo + '&end=' + toDaysDate + '&order=newest&featured=false&tag_search_type=any&countries=RU&without_tags=false',
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

});