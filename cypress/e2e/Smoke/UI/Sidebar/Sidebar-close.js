/// <reference types="cypress" />

import { beforeEach } from "mocha";
/// <reference types="cypress" />
import {Auth} from "../../../Classes_library/Auth";
import {Commands} from "../../../Classes_library/Commands";

const auth = new Auth();
const commands = new Commands();

const transform = 'matrix(1, 0, 0, 1, -206, 0)'
const color = 'rgb(86, 107, 188)'

describe("Sidebar should has transform when closed", () => {

    before("User SignIn", () => {
        auth.signIn()
        auth.getToken()
    })
    beforeEach("getFrontendSettings", () => {
        cy.setCookie('Authorization', auth.token);
        commands.getFrontendSettings()
    })

    it("Get sidebar status from frontend-settings", () => {
        // commands.getFrontendSettings()
        // console.log(commands.isOpen)
    })

    it("Check Sidebar status and close it if opened", () => {
        cy.setCookie('Authorization', auth.token);
        const isOpen = commands.frontendSettings.isOpen
        commands.closeSidebar(isOpen)
    })

    it("Compare Sidebar status match closed", () => {
        cy.setCookie('Authorization', auth.token);
        cy.wait(3000)
        let sidebarIsOpen = commands.isOpen
        commands.checkSidebarStatus(sidebarIsOpen)
    })

    it("Sidebar should has transform:" + transform + " when closed", () => {
        cy.setCookie('Authorization', auth.token);
        cy.get('aside').should('have.css', 'transform', `${transform}`)
    })

    it("Sedebar menu icon onhover should has " + color, () => {
        cy.setCookie('Authorization', auth.token);
        cy.get(':nth-child(2) > .py-12').invoke('addClass', 'text-primary').should('have.css', 'color', `${color}`)
    })
})
