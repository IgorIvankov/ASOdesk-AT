/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('Search Explorer RuStore is not available for other countries', () => {   
    
    it('Search Explorer RuStore is avaliable in Russia', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to Search Explorer 
        cy.get('a[href="/stores-analytics/search-explorer?locale=ru"]').contains('Stores Analytics').click();
        
        //Choose Russia locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();

        //Check that rustore checkbox is visible
        cy.get('span[data-testid="icon-rustore"]').should('be.visible');



    })

    it('Search Explorer RuStore is not avaliable in other countries', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to Search Explorer 
        cy.get('a[href="/stores-analytics/search-explorer?locale=ru"]').contains('Stores Analytics').click();
        
        //Choose Canada locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();

        //Check that rustore checkbox is not visible
        cy.get('span[data-testid="icon-rustore"]').should('not.be.exist');
    })

})    
