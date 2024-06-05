/// <reference types="cypress" />
import { Constants } from "../../Service_new/Classes_library/Constants";

import 'dayjs';

const constant = new Constants();

const toDaysDate = constant.toDaysDate;
const prevDaysDate = constant.s_toDaysDate;

//for CVR Benchmarks
const dayjs = require('dayjs')
let prevMonth = dayjs().month(11) ? dayjs().format("YYYY") - 1 + dayjs().month(11).format("MM") : dayjs().format("YYYYMM") - 1;
// condition above is way to do test flexible (sensitive) if is last month in year
let isNull;

describe ('Top Charts should have limited data', function () {
    
    it('top-charts free should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-charts/?device_type=iphone&length=20&list_type=free&start=0&store_id=3600&timestamp=' + toDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body.data).not.be.empty;
        }) 
        
    })

    it('top-charts paid should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-charts/?device_type=iphone&length=20&list_type=paid&start=0&store_id=3600&timestamp=' + toDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body.data).not.be.empty;
        }) 
        
    })

});

describe('CVR Benchmark should have limited data', function () {
    
    it('Was data downloaded for ' + prevMonth + '?', () => {
        cy.request({
            method: 'get',
            followRedirect: false, log: true, //turn off
            url: '/api/us/benchmark/?month=' + prevMonth + '&appType=apps&storeType=apple-store',
            headers: {},
            response: []
        })
        .then((response) => {
            if (response.body.categories.length === 0) {
                isNull = true
                chai.expect(isNull).to.be.false // Error! Data wasn`t downloaded!
            } else {
                cy.log('Data was downloaded! Everything is OK!')
            }
        })
    })

});

describe('Top Keywords should have limited data', function () {
    
    it('top-keywords should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-keywords?store=appstore',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body).not.be.empty;
        }) 
        
    })

});

describe('App Store Trending Searches should have limited data', function () {
    
    it('trending-searches iphone should response 200 and not be empty', () => {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: 'api/us/trending-searches/?device=iphone&timestamp=' + prevDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.is_demo).eq(true);
            })
    })

    it('trending-searches ipad should response 200 and not be empty', () => {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: 'api/us/trending-searches/?device=ipad&timestamp=' + prevDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.is_demo).eq(true);
            })
    })

});