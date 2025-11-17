/// <reference types="cypress" />
import {Constants} from "../../Classes_library/Constants";

const constant = new Constants();

beforeEach("Ignore 401", () => {
    // Ignore errors for unauthorized user (401)
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("401")) {
        return false;
      }
    });
});

describe('Tools should redirect to login page without Authorization', function () {
    
    it('Categories Ranking should redirect to login page', function () {

        cy.visit('/');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Categories Ranking').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });

    it('Charts should redirect to login page', function () {

        cy.visit('/');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Charts').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });    

    it('Competitors positions should redirect to login page', function () {

        cy.visit('/');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Competitors Position').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });  

    it('Auto-Suggestions should redirect to login page', function () {

        cy.visit('/');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Auto-Suggestions').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Text Metadata Builder should redirect to login page', function () {

        cy.visit('/');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('Text Metadata Builder').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
    it('Featured Reviews should redirect to login page', function () {

        cy.visit('/');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Featured Reviews').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Reviews Analysis should redirect to login page', function () {

        cy.visit('/');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Reviews Analysis').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
    it('Rating Analysis should redirect to login page', function () {

        cy.visit('/');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Rating Analysis').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });     

    it('API should redirect to login page', function () {

        cy.visit('/');

        //Open Connections Hub
        cy.contains('Connections Hub').click();
        cy.get('a[href="/connections-hub/api"]').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Keyword Boost should redirect to login page', function () {

        cy.visit('/');

        //Open Keyword Boost
        cy.contains('Keyword Boost').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Refer a Friend should redirect to login page', function () {

        cy.visit('/');

        //Open Refer a Friend
        cy.contains('Refer a Friend').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

});

describe('Templates should redirect to login page', function () {

    it('redirect to login page', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Templates').click();
        
        //Check redirect to login page
        cy.url().should('include', 'login');
    });

});

describe('Auto-Replies should redirect to login page', function () {

    it('redirect to login page', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Auto-Replies').click();
        
        //Check redirect to login page
        cy.url().should('include', 'login');
    });

});

describe('Tags should redirect to login page', function () {

    it('redirect to login page', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Tags').click();
        
        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
});

describe('Auto-Tags should redirect to login page', function () {

    it('redirect to login page', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Auto-Tags').click();
        
        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
});