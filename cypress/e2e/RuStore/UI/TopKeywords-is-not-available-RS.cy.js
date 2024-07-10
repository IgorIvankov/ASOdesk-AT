/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('Top Keywords RuStore is not available for other countries', () => {   
    
    it('Top Keywords RuStore is avaliable in Russia', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to Top Keywords 
        cy.get('a[href="/stores-analytics/search-explorer?locale=ru"]').contains('Stores Analytics').click();
        cy.get('a[href="/stores-analytics/top-keywords?locale=ru"]').contains('Top Keywords').click();

        
        //Choose Russia locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();

        //Check that rustore checkbox is visible
        cy.get('span[data-testid="icon-rustore"]').should('be.visible');



    })

    it('Top Keywords RuStore is not avaliable in other countries', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to Top Keywords 
        cy.get('a[href="/stores-analytics/search-explorer?locale=ru"]').contains('Stores Analytics').click();
        cy.get('a[href="/stores-analytics/top-keywords?locale=ru"]').contains('Top Keywords').click();
        
        //Choose Canada locale
        cy.wait(5000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();

        //Check that rustore checkbox is not visible
        cy.get('span[data-testid="icon-rustore"]').should('not.be.exist');
    })

})    
