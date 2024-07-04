/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();

describe('HS availability through Plans', () => {   
    
    it('HubSpot is visible', () => {
       
        //Sign in
        auth.signIn();

        //Open Plans page
        cy.get('span[data-testid="icon-icon-more-3-dots"]').click();
        cy.contains('View All Plans').click();
        cy.contains('Services').click();
        cy.contains('Get plan').eq(0).click();

        //Close a review frame if visible and open HubSpot frame
        cy.wait(3000);
        if (Cypress.$('button[aria-label="закрыть интервал"]').length > 0) {
            cy.click()
        } else {   
            cy.contains('contact us').click();
        }

        //Check HubSpot availability
        cy.get('iframe[id="hubspot-conversations-iframe"]').should('be.exist').and('be.visible');

    })
})
