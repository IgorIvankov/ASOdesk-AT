/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('Keyword boost is not available for RuStore apps', () => {   
    
    it('Redirect to My Apps page', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Choose Russia locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();

        //Go to rustore app profile page
        cy.get('a[href="/aso-tools/app-profile/ru.tinkoff.sme-rs?locale=ru"]').contains('Т-Бизнес').click();

        //Go back to My Apps page with saved rustore app
        cy.wait(3000);
        cy.get('a[href="/my-apps/?locale=ru"]').contains('My Apps').click();

        //Click to Keyword Boost tool to check for redirecting to My Apps page
        cy.wait(3000);
        cy.get('a[href="/keyword-boost/index/ru.tinkoff.sme-rs?locale=ru"]').contains('Keyword Boost').click();
        cy.url().should('include', '/my-apps/?locale=ru')
    })

})    
