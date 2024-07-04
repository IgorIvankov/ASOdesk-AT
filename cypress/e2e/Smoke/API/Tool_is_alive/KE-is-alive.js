/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();

describe('Keyword Explorer should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('KE "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/keyword-explorer/search?country=US&device=iphone&keyword=tinder&length=20&start=0&remember=true&storeid=351331194',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KE "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/351331194/keyword-explorer/suggestions?device_type=iphone&keyword=tinder',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    //В данном блоке теперь не будет отображаться информация, так как используется веб-выдача GP

    // it('KE "related" should response 200 and not be empty ', function () {
    //     cy.request({
    //         method: 'POST',
    //         followRedirect: true, log: true, //turn off
    //         url: 'api/us/com.bpmobile.iscanner.free/keyword-explorer/related?device_type=googleplay&keyword=mcdonalds',
    //         headers: {
    //             'accept': 'application/json',
    //             'Authorization': auth.token,
    //         },
    //         response: []
    //     })
    //         .then((response) => {
    //             expect(response.status).eq(200)
    //             expect(response.body.data).not.be.empty;
    //         })
    // });
});
