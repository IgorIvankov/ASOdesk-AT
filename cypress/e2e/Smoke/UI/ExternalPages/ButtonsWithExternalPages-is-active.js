/// <reference types="cypress" />

import { Auth } from "../../Service_new/Classes_library/Auth";

const auth = new Auth();


describe ('Buttons with external links should be active and have "_blank"', function () {

    it('links, visible, not disabled, target="_blank"', function () {
        //Sign in
        auth.signIn();
        
        //Apple Search Ads
        cy.get('a[href="https://angletech.ai/asa"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

        //ASO Consulting
        cy.get('a[href="https://angletech.ai/aso"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

        //ASO Course
        cy.get('a[href="https://asodesk.com/free-video-course"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");
       
        //Community
        cy.get('a[href="https://asodesk.com/slack-group"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

        //Schedule A Demo
        cy.get('a[href="https://meetings-eu1.hubspot.com/asodesk/product-tour-cs"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

    });

})