/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Constants} from "../../../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.AsFavCountryIds;

const prevMonth = (() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1); 
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    return `${year}${month}`;
})();

describe('CVR Benchmark is alive', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {

        it('Check Benchmark type apps in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/benchmark/?month=' + prevMonth +'&appType=apps&storeType=apple-store',
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                    // 'sessionid': '' + auth.session //sessionid from cookies
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.categories).not.be.empty;
                })
        });

        it('Check Benchmark type games in Locale: ' + country.toUpperCase(), () => {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: 'api/' + country + '/benchmark/?month=' + prevMonth +'&appType=games&storeType=apple-store',
                headers: {
                    'accept': 'application/json',
                    'Authorization': auth.token,
                    // 'sessionid': '' + auth.session //sessionid from cookies
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.categories).not.be.empty;
                })
        })
    }   
    
});