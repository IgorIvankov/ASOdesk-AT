/// <reference types="cypress" />
import { Auth } from "../../../Classes_library/Auth";

const auth = new Auth();

describe('Add Competitor in App Profile page Mode is not availible without permission', () => {   
    
    it('Add competitor feature in App Profile', () => {
       
        //Sign in
        auth.signIn();

        //Go to App Profile
        cy.get('a[href="/aso-tools/app-profile/com.ubercab.driver?locale=us"]').contains('Uber').click();

        //Add competitor
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--md rounded-4 !rounded-l-0"]').contains('Competitors').click();
        cy.get('button[class="buttonElementNew focus:!text-white buttonElementNew--primary buttonElementNew--xs rounded-4"]').first('').click();
        cy.get('span[data-testid="icon-cross"]').click();
        
        //Go to Competitors Positions
        cy.get('div[class="relative cursor-default js-local-navigation-and-tools-step-tour"]').contains('Keywords').trigger('mouseover');
        cy.contains('Competitors Position').click();

        //Check and delete competitor
        cy.get('a[class="btn btn-xs btn-danger dropdown-toggle ng-scope"]').click();
    })

})    
