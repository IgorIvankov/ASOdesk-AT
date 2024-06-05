/// <reference types="cypress" />
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();

beforeEach("Ignore 401", () => {
    // Ignore errors for unauthorized user (401)
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("401")) {
        return false;
      }
    });
});

describe('Profile should have full access without Authorization', function () {
    
    it('Profile page of Demo app (Nike) should be accessible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        
        cy.contains('Nike Training Club');
    }); 

});

describe('Keyword Phrase Mixer should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Phrase Mixer').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

});

describe('Live Positions should have full access without Authorization', function () {
    
    it('Demo banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Live Positions').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 
    
});

describe('Description Creator should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
         cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('Description Creator').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    });

});

describe('App Store Localizations should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('App Store Localizations').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

});

describe('Search Explorer should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Stores Analytics').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

});

describe('All Reports Settings should have Full Access without Authorization', function () {
    
    it('Demo Banner should be visible and Create button redirect to login page', function () {
        cy.visit('/');
    
        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        
        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
        
        //Click on Create button 
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--lg buttonElement--solid rounded-4"]').click();
        cy.get('button[type="button"]:contains("Email report or alert")').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });

        // error 401 (?)
    // it('Custom reports list should response 200', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: '/custom-reports/api/channel/list/',
    //         headers: {
    //             'accept': 'application/json',
    //         },
    //         response: []
    //     })
    //         .then((response) => {

    //             expect(response.status).eq(200)

    //         })
    // });

});

describe('Reports Timeline should have Full Access without Authorization', function () {
    
    it('Demo banner should be visible and Reports Timeline should have Full Access', function () {
        cy.visit('/');

        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        cy.get('a[href="/connections-hub/timeline"]').click();

        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');

        // ???
        cy.contains('Reports Timeline').should('be.visible');
    });

        // error 401 (?)
    // it('Custom reports list should response 200', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: '/custom-reports/api/channel/email/report-history/',
    //         headers: {
    //             'accept': 'application/json',
    //         },
    //         response: []
    //     })
    //         .then((response) => {

    //             expect(response.status).eq(200)

    //         })
    // });

});

describe('Integrations should have Full Access without Authorization', function () {
    
    it('Demo banner should be visible and Connect buttons should redirect to login page', function () {
        
        cy.visit('/');

        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        //Open Integrations
        cy.get('a[href="/connections-hub/integrations"]').click();

        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible'); 

        //Click ASC button
        cy.contains('Add App Store Connect Account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click GPC button
        cy.contains('Add Google Play Console Account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Zendesk button
        cy.contains('Connect Zendesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Omnidesk button
        cy.contains('Connect Omnidesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Usedesk button
        cy.contains('Connect Usedesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
    });

});