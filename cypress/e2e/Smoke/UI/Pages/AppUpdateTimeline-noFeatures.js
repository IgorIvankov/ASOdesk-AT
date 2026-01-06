/// <reference types="cypress" />
import { Auth } from "../../../Classes_library/Auth";

const auth = new Auth();

describe('User without feature App Update Timeline ', () => {   
    
    it('Limited data and upgrade plan banner are shown to user', () => {
       
        //Sign in
        auth.signIn('igor_i+replytoreviews@asodesk.com');

        //Go to App Profile
        cy.get('a[href="/aso-tools/app-profile/284815942?locale=ru"]').click();

        //Focus on Competitors hover
        cy.get('div[class="relative cursor-default"]').contains('Competitors').trigger('mouseover');

        //Click on App Update Timeline
        cy.contains('Timeline').click();

        //Check Upgrade banner
        cy.contains('Upgrade your plan and start using App Update Timeline for all your apps').should('be.visible');

        //Check Upgrade pop-up modals
        cy.contains('Technical Updates').trigger('mouseover');
        cy.contains('Please upgrade your plan or contact us for assistance').should('be.visible');

    })

})    
