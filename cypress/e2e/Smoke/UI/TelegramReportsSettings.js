/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('User can create Telegram Reports', () => {   
    
    it('Create telegram report', () => {
       
        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');

        //Go to Connections Hub
        cy.contains('Connections Hub').click();

        //Go to report settings modal
        cy.contains('Create').click();
        cy.contains('Telegram notification').click();

        //Create report
        cy.get('input[placeholder="Asodesk Main Alerts"]').type('New Autotest telegram report');
        cy.get('input[placeholder="-1001234567890"]').type('123123');
        cy.contains('div[class="flex items-center justify-between py-12 px-16"]', 'New review with tag').find('[data-testid="icon-cross"]').click();
        cy.get('button[class="buttonElement rounded-4 buttonElement--primary buttonElement--lg buttonElement--solid buttonElement--block"]').click();
        
        //Checking created report
        cy.contains('New Autotest telegram report').should('exist');
        cy.contains('div[role="row"]', 'New Autotest telegram report').find('[data-testid="icon-more-dots-vertical"]').click();
        cy.contains('Delete').click();
    })

})    
