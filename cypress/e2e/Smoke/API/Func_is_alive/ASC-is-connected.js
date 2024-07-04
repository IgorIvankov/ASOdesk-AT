/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();


describe('Integrations should have Full Access without Authorization', function () {
    
    it('Obtain token', function () {
        auth.obtain();
    })

    
    it('ASC should be connected', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/app-store-connect-provider/',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body[0].status).to.equal('Authorized');
            })
    });

});