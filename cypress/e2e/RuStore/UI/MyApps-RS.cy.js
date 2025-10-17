/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('My Apps page', () => {   
    
    it('Search app by URL, storeid, title', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Search app by URL
        cy.wait(5000);
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.contains('.appOption__title', 'СберБанк Онлайн') // Находим элемент, содержащий текст "СберБанк Онлайн"
        .parents('.appSearchSelect__option') // Находим родительский элемент с классом appSearchSelect__option
        .within(() => { // Выполняем действия внутри найденного родительского элемента
            cy.contains('Track').should('exist'); 
        });      

        //Search app by storeid
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').clear().type('ru.sberbankmobile-rs');
        cy.contains('.appOption__title', 'СберБанк Онлайн')
        .parents('.appSearchSelect__option')
        .within(() => {
            cy.contains('Track').should('exist'); 
        });
        
        //Search app by name
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').clear().type('Сбербанк');
        cy.contains('.appOption__title', 'СберБанк Онлайн')
            .parents('.appSearchSelect__option')
            .within(() => {
                cy.get('[data-testid="icon-rustore"]')
                    .should('exist');
                cy.contains('Track').should('exist');
        });
    })
    
    it('Search app in the wrong country', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');
        
        //Search app by URL in the wrong country
        cy.wait(10000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.wait(10000);
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.contains('.appOption__title', 'СберБанк Онлайн').should('not.exist')

        //Search app by Name in the wrong country
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').clear().type('ru.sberbankmobile-rs');
        cy.contains('.appOption__title', 'СберБанк Онлайн').should('not.exist')

    })

    it('Track rustore app', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Track app
        cy.wait(5000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="appSearchSelect__value-container css-1hwfws3"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.contains('.appOption__title', 'СберБанк Онлайн')
        .parents('.appSearchSelect__option')
        .within(() => {
            cy.contains('Track').click(); 
        });
        cy.wait(5000);
    })

    it('RuStore app only in RU locale', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Check rustore app in CA locale
        cy.wait(10000);
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.wait(10000);
        cy.get('div[class="dashboardAppList"]').contains('Сбербанк').should('not.exist')

        //Check rustore app in RU locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.wait(10000);
        cy.get('div[class="dashboardAppList"]').contains('Сбербанк').should('be.exist')
    })

    it('Untrack RuStore app', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Untrack button click
        cy.contains('.dashboardAppCard', 'СберБанк Онлайн').find('.ml5.remove.cursor.dashboardAppCard__activeButton').click();

        //Remove button click
        cy.get('button[class="buttonElement rounded-4 buttonElement--default buttonElement--lg buttonElement--solid buttonElement--block"]').click();
        
        //Check that the app has been removed
        cy.contains('.dashboardAppCard', 'СберБанк Онлайн').should('not.be.exist');
    })

})    
