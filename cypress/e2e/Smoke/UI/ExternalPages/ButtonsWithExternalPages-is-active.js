/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";

const auth = new Auth();


describe('Buttons with external links', function () {
  const externalLinks = [
    {
      name: 'Apple Search Ads',
      href: 'https://angletech.ai/asa',
    },
    {
      name: 'ASO Consulting',
      href: 'https://angletech.ai/aso',
    },
    {
      name: 'ASO Course',
      href: 'https://asodesk.com/free-video-course',
    },
    {
      name: 'Community',
      href: 'https://asodesk.com/slack-group',
    },
    {
      name: 'Schedule A Demo',
      href: 'https://meetings-eu1.hubspot.com/asodesk/product-tour-cs',
    },
  ];

  beforeEach(() => {
    auth.signIn();
  });

  it('external links should be visible and open in a new tab', function () {
    externalLinks.forEach(({ name, href }) => {
      cy.log(name);

      cy.get(`a[href="${href}"]`)
        .should('be.visible')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'href', href);
    });
  });
});


//Old version
// describe ('Buttons with external links should be active and have "_blank"', function () {

//     it('links, visible, not disabled, target="_blank"', function () {
//         //Sign in
//         auth.signIn();
        
//         //Apple Search Ads
//         cy.get('a[href="https://angletech.ai/asa"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

//         //ASO Consulting
//         cy.get('a[href="https://angletech.ai/aso"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

//         //ASO Course
//         cy.get('a[href="https://asodesk.com/free-video-course"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");
       
//         //Community
//         cy.get('a[href="https://asodesk.com/slack-group"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

//         //Schedule A Demo
//         cy.get('a[href="https://meetings-eu1.hubspot.com/asodesk/product-tour-cs"]').should("be.visible").and("not.be.disabled").and("have.attr", "target", "_blank");

//     });

// })