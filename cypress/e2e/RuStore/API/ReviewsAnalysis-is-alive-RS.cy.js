/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore

describe('Reviews Analysis should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('review-analysis should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/' + app + '/reviews-analysis/language-breakdown/?is_cumulative=1',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                by_changes: '1',
                end_date: constant.toDaysDate,
                languages: ['ru'],
                search: "",
                start_date: constant.monthAgo,
                tag_categories: [],
                tags: [],
                without_tags: false,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });



});