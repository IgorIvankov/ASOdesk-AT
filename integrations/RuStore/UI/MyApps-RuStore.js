/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('My Apps page', () => {   
    
    it('Search app by URL, storeid, title', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Search app by URL
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/com.tjuraniaapp');
        cy.contains('Track').should('exist');

        //Search app by storeid
        cy.get('input[id="react-select-2-input"]').clear().type('com.tjuraniaapp-rs',{force: true});
        cy.contains('Track').should('exist');
        
        //Search app by name
        cy.get('input[id="react-select-2-input"]').clear().type('Тинькофф Журнал',{force: true});
        cy.get('span[alt="Тинькофф Журнал"]').contains('Track').click();

        //Search app by URL in the wrong country
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/com.tjuraniaapp');
        cy.contains('Track').should('not.be.visible');

        // //Search app by URL in the wrong country
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('input[id="react-select-2-input"]').clear().type('com.tjuraniaapp-rs',{force: true});
        cy.contains('Track').should('not.be.visible');
    })

    it('Track rustore app', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Track app
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/com.tjuraniaapp');
        cy.get('button[class="btn btn-xs btn-primary"]').contains('Track').click();
        cy.wait(5000);
    })

    it('RuStore app only in RU locale', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Check rustore app in RU locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="dashboardAppList"]').contains('Тинькофф Журнал').should('be.visible')

        //Check rustore app in CA locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('div[class="dashboardAppList"]').contains('Тинькофф Журнал').should('not.exist')

    })

})    