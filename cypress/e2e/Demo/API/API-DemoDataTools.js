/// <reference types="cypress" />
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();

const toDaysDate = constant.toDaysDate;
const monthAgo = constant.monthAgo;

describe('ASO CR should have Demo data', function () {

    it('comparative-report-chart should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            //url: '/api/us/301521403/comparative-report-chart?time_since=' + monthAgo + '&time_till=' + toDaysDate,
            url: '/123/api/us/301521403/comparative-report-chart?time_since=' + monthAgo + '&time_till=' + toDaysDate, //TEST FAILING FOR SLACK NOTIFICATION
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

    it('comparative-report-metas should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: '/api/us/301521403/comparative-report-metas?from_timestamp=' + monthAgo + '&to_timestamp=' + toDaysDate,
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

    it('comparative-report should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: '/api/us/301521403/comparative-report?from_timestamp=' + monthAgo + '&to_timestamp=' + toDaysDate,
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
    
});

// describe('Traffic Source should have Demo data', function () {
    
//     it('impressionsTotalUnique,units should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/301521403/dashboard?country=us&metrics=impressionsTotalUnique,units&time_since=' + monthAgo + '&time_till=' + toDaysDate,
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//         .then((response) => {
//             expect(response.status).eq(200);
//             expect(response.body.title).contains('Nike Training Club: Fitness');
//         })
//     });

//     it('pageViewUnique,units should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/301521403/dashboard?country=us&metrics=pageViewUnique,units&time_since' + monthAgo + '&time_till=' + toDaysDate,
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//         .then((response) => {
//             expect(response.status).eq(200);
//             expect(response.body.title).contains('Nike Training Club: Fitness');
//         })
//     });
// });

// describe('Keyword Highlights should have Demo data', function () {

//     it('keyword-highlights should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/301521403/keyword-analysis/keyword-highlights/?from_timestamp=' + monthAgo + '&to_timestamp=' + toDaysDate + '&countries=US&keyword_storetype=iphone',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//         .then((response) => {
//             expect(response.status).eq(200)
//             expect(response.body['us']).not.be.empty;
//         })
//     });
// });

// describe('Favorite Keywords should have Demo data', function () {

//     it('KA "Keyword Favorite" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/301521403/keyword-analysis/keyword-favorite/?from_timestamp=' + monthAgo + '&to_timestamp=' + toDaysDate + '&countries=US&keyword_storetype=iphone',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//         .then((response) => {
//             expect(response.status).eq(200)
//             // expect(response.body['us']).not.be.empty; - No data
//         })
//     });

// });

// describe('Organic Report should have Demo data', function () {
    
//     it('organic-report should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'POST',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/organic-report',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//         .then((response) => {
//             expect(response.status).eq(200)
//             expect(response.body.data).not.be.empty;
//         })
//     });

//     it('comparative-report-basic should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/comparative-report-basic',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.data["21-50"]).not.be.eq(0);
//             })
//     });

//     it('organic-report-history should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/organic-report-history?interval=30d',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.data.total[0][1]).not.be.eq(0);
//             })
//     });
// });

// describe('Find & Track should have Demo data', function () {

//     it('KM "suggestions" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/keyword-analytics/suggestions',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.data).not.be.empty;
//             })
//     });

//     it('KM "competitor_ids" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/keyword-analytics/data-stats?competitor_ids=47746,271433,488851,1144906,4459760,106040694,113822169,196083920,218964173&show_installs=true',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.data).not.be.empty;
//             })
//     });

//     it('KM "sa" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/keyword-analytics/suggestions/sa/301521403',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.data).not.be.empty;
//             })
//     });

//     it('Chart "chart" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/keyword/228611/chart?limit=2737424s&timestamp=1699968224112',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.keywords).not.be.empty;
//             })
//     });

//     it('TopApp "top apps" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/us/301521403/keyword/228611/top-apps',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: []
//         })
//             .then((response) => {
//                 expect(response.status).eq(200)
//                 expect(response.body.phone.data).not.be.empty;
//             })
//     });
// });

// describe('Tag Analysis should have Demo data', function () {

//     it('Versions should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/301521403/versions',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });

//     it('tag-analysis-statistics should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'POST',
//             followRedirect: true, log: true, //turn off
//             url: '/tag-analysis-statistics',
//             headers: {
//                 'accept': 'application/json',
//             },
//             body: {
//                 countries: [constant.GpFavCountryIds[1].toUpperCase()],
//                 languages: ["en"],
//                 storeid: '301521403',
//                 time_since: constant.monthAgo,
//                 time_till: constant.toDaysDate,
//                 versions: [],
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });

//     it('tag-analysis-tags-report" should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'POST',
//             followRedirect: true, log: true, //turn off
//             url: '/tag-analysis-tags-report',
//             headers: {
//                 'accept': 'application/json',
//             },
//             body: {
//                 countries: [constant.GpFavCountryIds[1].toUpperCase()],
//                 languages: ["en"],
//                 storeid: '301521403',
//                 time_since: constant.monthAgo,
//                 time_till: constant.toDaysDate,
//                 versions: [],
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });
    
// });

// describe('Templates should have Demo data', function () {

//     it('review-teplates should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: 'api/review-templates/dirs/?storeid=301521403',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });
// });

// describe('Auto-Replies should have Demo data', function () {

//     it('review-tag should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: '/api/review-tag/structure/',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });

//     it('auto-reply-rules should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: '/api/auto-reply-rules/',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });

//     it('review-teplates should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: '/api/review-templates/dirs/?storeid=301521403',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });

// });

// describe('Tags should have Demo data', function () {

//     it('review-tag should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: '/api/review-tag/structure/',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });
// });

// describe('Auto-Tags should have Demo data', function () {

//     it('auto-tag-rules should response 200 and not be empty ', function () {
//         cy.request({
//             method: 'GET',
//             followRedirect: true, log: true, //turn off
//             url: '/api/auto-tag-rules/',
//             headers: {
//                 'accept': 'application/json',
//             },
//             response: [],
//         })
//             .then((response) => {
//                 expect(response.status).eq(200);
//                 expect(response.body).not.be.eq(0).and.not.be.undefined;
//             })
//     });
    
// });