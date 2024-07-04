/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();

describe('Sidebar should be exist and visible', () => {
    it('User SignIn', () => {
        auth.signIn();
    })

    it('Sibebar exist and visible', () => {
        cy.get('aside').should('be.exist').and('be.visible')
    })
})



