/// <reference types="cypress" />
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();



describe('Profile should have full access without Authorization', function () {
    
    it('app-profile should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/app-profile',
            headers: {
                'accept': 'application/json',
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('total-views should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/total-views',
            headers: {
                'accept': 'application/json',
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('review-stats should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/review-stats',
            headers: {
                'accept': 'application/json',
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('reviews-chart should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/reviews-chart',
            headers: {
                'accept': 'application/json',
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                start: constant.monthAgo,
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
});

describe('Keyword Phrase Mixer should have full access without Authorization', function () {
    
    it('Keyword Phrase Mixer "free" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/shuffle/free/',
            headers: {
                'accept': 'application/json',
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

describe('Live Positions should have full access without Authorization', function () {
    
    it('Live Position "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/keyword-explorer/search?country=US&device=iphone&keyword=sport&length=20&start=0&remember=true&storeid=301521403',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });
    
    it('Live Position "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=US&device=iphone&keyword=sport&storeid=301521403',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.suggestions).not.be.empty;
            })
    });
    
});

describe('Description Creator should have full access without Authorization', function () {
    
    it('Description Creator "density counter" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/density-counter',
            headers: {
                'accept': 'application/json',
            },
            body: {
                content: "App Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake.\nApp Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake."
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.keywords).not.be.empty;
                expect(response.body.total_chars).not.be.eq(0);
            })
    });

});

describe('App Store Localizations should have full access without Authorization', function () {
    
    it('countries-localzation should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/countries-localizations',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

});

describe('Search Explorer should have full access without Authorization', function () {
    
    it('KE AS "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=iphone&keyword=sport&length=20&start=0&remember=true',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KE GP "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=google&keyword=sport&length=20&start=0&remember=true',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KE AS "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=US&device=iphone&keyword=sport',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE GP "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=ES&device=google&keyword=sport',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE AS "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=iphone',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE GP "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=google',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

});