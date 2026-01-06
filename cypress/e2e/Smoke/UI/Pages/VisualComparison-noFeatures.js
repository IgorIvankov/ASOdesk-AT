/// <reference types="cypress" />
import { Auth } from "../../../Classes_library/Auth";

const auth = new Auth();

describe('Export and icons&screenshots are disabled without features', () => {   
    
    it('Export and icons&screenshots are disabled without features', () => {
       
        //Sign in
        auth.signIn('igor_i+replytoreviews@asodesk.com');

        //Go to App Profile
        cy.get('a[href="/aso-tools/app-profile/284815942?locale=ru"]').click();

        //Focus on Competitors hover
        cy.get('div[class="relative cursor-default"]').contains('Competitors').trigger('mouseover');

        //Click on Visual Comparison
        cy.contains('Visual').click();

        //Check Export button
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4"]').trigger('mouseover');
        cy.contains('Please upgrade your plan or contact us for assistance').should('be.visible');

        //Check Icons & Screenshots
        cy.contains('App Page').click();
        cy.contains('Icons & Screenshots').trigger('mouseover');
        cy.contains('Please upgrade your plan or contact us for assistance').should('be.visible');

    })

})    
