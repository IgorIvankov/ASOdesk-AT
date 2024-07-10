/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('Keyword boost is not available for RuStore apps', () => {   
    
    it('Redirect to My Apps page', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Go to rustore app profile page
        cy.wait(5000);
        cy.get('a[href="/aso-tools/app-profile/ru.tinkoff.sme-rs?locale=ru"]').click();

        //Go back to My Apps page with saved rustore app
        cy.contains('My Apps').click();

        //Click to Keyword Boost tool to check for redirecting to My Apps page
        cy.contains('Keyword Boost').click();
        cy.url().should('eq', 'https://hq.asodesk.com/my-apps/?locale=ru')

    })

})    
