/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('My Apps page. SamsungGS', () => {   
    
    it('Search SGS app by URL, storeid, title', () => {
       
        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');

        //Search SGS app by URL
        cy.wait(5000);
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://galaxystore.samsung.com/detail/ru.vtb24.mobilebanking.android');
        cy.contains('.appOption__title', 'ВТБ')
        .parents('.appSearchSelect__option')
        .within(() => { 
            cy.contains('Track').should('exist'); 
        });      
    })
    
    it('Search SGS app in the wrong country', () => {

        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');
        
        //Search SGS app by URL in the wrong country
        cy.wait(10000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.wait(10000);
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://galaxystore.samsung.com/detail/ru.vtb24.mobilebanking.android');
        cy.contains('.appOption__title', 'ВТБ').should('not.exist')

    })

    it('Track SGS app', () => {

        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');

        //Track app
        cy.wait(5000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://galaxystore.samsung.com/detail/ru.vtb24.mobilebanking.android');
        cy.contains('.appOption__title', 'ВТБ')
        .parents('.appSearchSelect__option')
        .within(() => {
            cy.contains('Track').click(); 
        });
        cy.wait(5000);
    })

    it('SGS app only in RU locale', () => {

        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');

        //Check sgs app in CA locale
        cy.wait(10000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.wait(10000);
        cy.get('div[class="dashboardAppList"]').contains('ВТБ').should('not.exist')

        //Check sgs app in RU locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.wait(10000);
        cy.get('div[class="dashboardAppList"]').contains('ВТБ').should('be.exist')
    })

    it('Untrack SGS app', () => {

        //Sign in
        auth.signIn('igor_i+100925@asodesk.com');

        //Untrack button click
        cy.contains('.dashboardAppCard', 'ВТБ').find('.ml5.remove.cursor.dashboardAppCard__activeButton').click();

        //Remove button click
        cy.get('button[class="buttonElement rounded-4 buttonElement--default buttonElement--lg buttonElement--solid buttonElement--block"]').click();
        
        //Check that the app has been removed
        cy.contains('.dashboardAppCard', 'ВТБ').should('not.be.exist');
    })

})    
