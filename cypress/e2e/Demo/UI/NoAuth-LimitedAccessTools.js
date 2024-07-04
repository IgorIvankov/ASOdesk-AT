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

describe('Top Charts should have limited access', function () {
    
    it('Limited version Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Stores Analytics').click();
        cy.contains('Top Charts').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 

});

describe('CVR Benchmark should have limited access', function () {
    
    it('Limited version Banner should be visible and export button redirect to login page', function () {
        cy.visit('/');
        cy.contains('Stores Analytics').click();
        cy.contains('CVR Benchmarks').click();

        // cy.get('button[class="buttonElement buttonElement--default buttonElement--oldMd buttonElement--solid buttonElement--block"]:contains("Export (.xslx)")').click();
        cy.contains('Export').click();    

        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');

    }); 
});

describe('Top Keywords should have limited access', function () {
    
    it('Limited version Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Stores Analytics').click();
        cy.contains('Top Keywords').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 
});

describe('App Store Trending Searches should have limited access and data', function () {
    
    it('Limited version Banner should be visible', function () {
        cy.visit('/');
        cy.contains('Stores Analytics').click();
        cy.contains('App Store Trending Searches').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 
});