/// <reference types="cypress" />
import { Auth } from "../../../Service_new/Classes_library/Auth";
import { Commands } from "../../../Service_new/Classes_library/Commands";
import find from 'lodash/find';

const auth = new Auth();
const commands = new Commands();

const width = '264px'
describe("Sidebar open. Has " + width + ". Has logo at top. Has menu section. Has limits section. Has bottom section", () => {

    describe("Sidebar should has width " + width + ". when opened", () => {
        before("User SignIn", () => {
            auth.signIn()
            auth.getToken()
        })

        beforeEach("Get sidebar status from frontend-settings", () => {
            cy.setCookie('Authorization', auth.token);
            commands.getFrontendSettings()
        })

        it("Check Sidebar status and open it if closed", () => {
            cy.setCookie('Authorization', auth.token);
            const isOpen = commands.frontendSettings.isOpen
            commands.openSidebar(isOpen)
            // commands.getFrontendSettings()
        })

        it("Compare Sidebar status match open", () => {
            cy.setCookie('Authorization', auth.token);
            const isOpen = commands.frontendSettings.isOpen
            commands.checkSidebarStatus(isOpen)
        })

        it("Sidebar should has max-min width:" + width + " when opened", () => {
            cy.setCookie('Authorization', auth.token);
            cy.get('aside').should('have.css', 'min-width', `${width}`)
            cy.get('aside').should('have.css', 'max-width', `${width}`)
        })


    })
    describe("Sidebar has logo section", () => {

        it("Opened Sidebar has logo at the top", () => {
            cy.get('.bg-gray-50 > a > img[src*="asodesk-dark-logo"]').should('be.visible').as('logo')
        })
    })

    describe("Opened sidebar has main menu section and list of this menu sections", () => {

        beforeEach("Get sidebar-info response", () => {
            cy.setCookie('Authorization', auth.token);
        })

        after('Get sidebar status from frontend-settings', () => {
            cy.setCookie('Authorization', auth.token);
            commands.getFrontendSettings()
        })
        it("Opened Sidebar has Main Menu section", () => {
            cy.contains('main menu', { matchCase: false })
        })

        it("First active child in list = Apps", () => {
            cy.get(':nth-child(1) > .border-t-0').should('have.class', '!text-primary').and('have.class', '!border-primary').as('apps').contains('Apps', { matchCase: false })
            cy.get('@apps').should('be.visible').and('have.attr', 'aria-current', 'page')
            cy.get('@apps').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@apps').children('.flex').children('span').should('have.class', 'icon-home').and('be.visible')
        })

        it("Second child in list = Free Tools", () => {
            cy.setCookie('Authorization', auth.token);
            cy.get(':nth-child(2) > .border-t-0').should('not.have.class', '!text-primary').and('not.have.class', '!border-primary').as('tools').contains('Free Tools', { matchCase: false })
            cy.get('@tools').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@tools').children('.flex').children('span').should('have.class', 'icon-free-tools').and('be.visible')

            // find exactly this object in menu section to use his state as parameter in func below
            let x = find(commands.frontendSettings.sections, { "id": "free-tools" })
            commands.expandMenu(x.collapsed, 'Free tools')

            // if section is expanded so check child's there
            cy.get('.sidebarSubsectionList__subsection > .flex > :nth-child(1)').should('have.attr', 'href', '/keyword-density-counter').and('be.visible')
            cy.get('.sidebarSubsectionList__subsection > .flex > :nth-child(2)').should('have.attr', 'href', '/keyword-shuffler').and('be.visible')
            cy.get('.sidebarSubsectionList__subsection > .flex > :nth-child(3)').should('have.attr', 'href', '/countries-localizations').and('be.visible')
            // commands.getFrontendSettings()
        })

        it("Third child in list = Store Analytics", () => {
            cy.get(':nth-child(3) > .border-t-0').should('not.have.class', '!text-primary').and('not.have.class', '!border-primary').as('analytics').contains('Store Analytics', { matchCase: false })
            cy.get('@analytics').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@analytics').children('.flex').children('span').should('have.class', 'icon-store-analytics').and('be.visible')
        })

        it("Fourth child in list = Store Console", () => {
            cy.get(':nth-child(4) > .border-t-0').should('not.have.class', '!text-primary').and('not.have.class', '!border-primary').as('console').contains('Store Console', { matchCase: false })
            cy.get('@console').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@console').children('.flex').children('span').should('have.class', 'icon-store-console').and('be.visible')
        })

        it("Fifth child in list = Settings", () => {
            cy.get(':nth-child(5) > .border-t-0').should('not.have.class', '!text-primary').and('not.have.class', '!border-primary').as('settings').contains('Settings', { matchCase: false })
            cy.get('@settings').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@settings').children('.flex').children('span').should('have.class', 'icon-settings-nav').and('be.visible')
        })

        it("Sixth child in list = Resources", () => {
            cy.get(':nth-child(6) > .border-t-0').should('not.have.class', '!text-primary').and('not.have.class', '!border-primary').as('resources').contains('Resources', { matchCase: false })
            cy.get('@resources').children('.flex').should('have.class', 'hover:text-primary')
            cy.get('@resources').children('.flex').children('span').should('have.class', 'icon-resources').and('be.visible')
        })
    })

    describe("Opened sidebar has user info limits section", () => {

        beforeEach("Get sidebar-info response", () => {
            cy.setCookie('Authorization', auth.token);
            commands.getSidebarInfo();
        })

        it("Limits section has Application stat and it equal server response", () => {
            const appCount = commands.sidebarInfo.app_count

            cy.get('.space-y-10').children('div').children('a').should('have.attr', 'href', '/settings/pricing').and('exist')
            cy.get(':nth-child(1) > .text-gray-500 > :nth-child(1)').should('contain.text', 'Applications').and('be.visible')
            cy.get(':nth-child(1) > .text-gray-500 > :nth-child(2)').should('contain.text', appCount).and('be.visible')
            // because all stats getting from server
            // we could compare only one of them
            // it'll give us fully understand
            // what is going on at this section
        })
    })

    describe("Opened sidebar has user referal section", () => {

        beforeEach("Get sidebar-info response", () => {
            cy.setCookie('Authorization', auth.token);
            commands.getSidebarInfo();
        })

        it("Referal section should exist and be visible", () => {
            cy.get('.w-264').should('exist').and('be.visible')
            cy.get('.lightButton_default__151uD').should('have.attr', 'href', '/settings/referral-program').and('be.visible')
        })

        it("Start Free Trial button sould call Intercom window", () => {
            cy.get('.mt-4 > .cursor-pointer').should('contain.text', 'Start Free Trial', { matchCase: false }).click()
            cy.get('.intercom-messenger-frame > iframe').should('be.visible')
        })
    })
})
