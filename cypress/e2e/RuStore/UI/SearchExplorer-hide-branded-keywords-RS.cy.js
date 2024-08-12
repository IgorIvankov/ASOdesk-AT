/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('Search Explorer Branded Keyword is unavailable for RuStore', () => {   
    
    it('Branded Keywords is not available for RuStore', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to Search Explorer 
        cy.get('a[href="/stores-analytics/search-explorer?locale=ru"]').contains('Stores Analytics').click();
        
        //Choose Russia locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();

        //Check that branded keyword is shown for GP and AS
        cy.get('input[class="searchInputPanel_input__Na9eW inputElement__input inputElement__input--default inputElement__input--lg inputElement__input--block"]').type('сравни');
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--xxl buttonElement--solid buttonElement--no-border rounded-4"]').click();
        cy.contains('This is a branded keyword for:').should('be.visible');
 
       //Check that branded keyword is not available for RS        
        cy.get('label[data-testid="checkbox-googleplay"]').click();
        cy.get('label[data-testid="checkbox-appstore"]').click();
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--xxl buttonElement--solid buttonElement--no-border rounded-4"]').click();
        cy.contains('This is a branded keyword for:').should('not.exist');
    })


})    
