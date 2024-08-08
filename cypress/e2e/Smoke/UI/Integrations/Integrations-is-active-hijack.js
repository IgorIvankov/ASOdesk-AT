/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();


describe('Integrations should be connected and active with hijack view', () => {   
    
    it('Omnidesk is connected', () => {
       
        //Sign in
        auth.signInAdmin();

        //Go to hijack view
        auth.hijack('lspakhomova@avito.ru');

        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        //Open Integrations
        cy.get('a[href="/connections-hub/integrations?locale=ru"]').click();

        //Check Omnidesk connection
        cy.contains('div.flex.items-center', 'aesakovnin@avito.ru')
            .should('exist')
            .within(() => {
            // Проверить, что рядом есть элемент со значением 'Authorized'
            cy.get('span').contains('Authorized').should('exist');
        });

    })
})