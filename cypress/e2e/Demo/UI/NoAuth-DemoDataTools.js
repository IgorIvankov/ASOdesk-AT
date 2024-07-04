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

describe('ASO CR should have Demo banner and Demo data', function () {
    
    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('ASO Comparative Report').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    }); 

});

describe('Traffic Source should have Demo banner and Demo data', function () {
    
    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Traffic Source').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    }); 

});

describe('Keyword Highlights should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Keyword Highlights').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    }); 

});

describe('Favorite Keywords should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Favorite Keywords').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });

});

describe('Organic Report should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Organic Report').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });

});

describe('Find & Track should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]:contains("Keywords")').click();
        cy.contains('Find & Track').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });

});

describe('Tag Analysis should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Tags Analysis').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });
    
});

describe('Templates should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Templates').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });

});

describe('Auto-Replies should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Auto-Replies').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });

});

describe('Tags should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Tags').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });
    
});

describe('Auto-Tags should have Demo banner and Demo data', function () {

    it('Demo Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Automation")').click();
        cy.contains('Auto-Tags').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power');
    });
    
});