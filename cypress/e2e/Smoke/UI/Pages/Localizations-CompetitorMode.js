/// <reference types="cypress" />
import { Auth } from "../../../Classes_library/Auth";

const auth = new Auth();

describe('Competitor Mode is not availible without permission', () => {   
    
    it('Localizations is avaliable and Competitors Mode is deactivated', () => {
       
        //Sign in
        auth.signIn('igor_i+replytoreviews@asodesk.com');

        //Go to App Profile
        cy.get('a[href="/aso-tools/app-profile/284815942?locale=ru"]').click();

        //Focus on App hover
        cy.get('div[class="relative cursor-default"]').contains('App').trigger('mouseover');

        //Click on Localizations
        cy.contains('Localizations').click();

        //Check competitors mode unavailability
        cy.get('div[class="rounded-full absolute left-0 top-0 right-0 bottom-0 bg-white bg-opacity-50"]').trigger('mouseover');

        cy.contains('Please upgrade your plan or contact us for assistance').should('be.visible');

    })

})    
