/// <reference types="cypress" />
import {Auth} from "../../Classes_library/Auth";
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();
const auth = new Auth();

const prevDaysDate = constant.prevDaysDate;
const toDaysDate = constant.toDaysDate;
const app = constant.applications.RS.tinkoff
const emailRustore = constant.loginRustore

describe('Categories Ranking should be alive and main requests should response 200', function () {
   
    it('Obtain token', function () {
        auth.obtain(emailRustore);
    })

    it('"/applications" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/category-ranking/applications?country=ru&device_type=rustore&storeids=' + app,
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('"/chart" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/category-ranking/chart?category=MAIN&category_list=apps&country=ru&device_type=rustore&storeids=' + app + '&timestamp_since=' + toDaysDate + '&timestamp_till=' + toDaysDate,
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    }); 

});


