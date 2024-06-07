/// <reference types="cypress" />
import { Auth } from "../../Classes_library/Auth";

const auth = new Auth();

describe('My Apps page', () => {   
    
    it('Search app by URL, storeid, title', () => {
       
        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Search app by URL
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.contains('Track').should('exist');

        //Search app by storeid
        cy.get('input[id="react-select-2-input"]').clear().type('ru.sberbankmobile-rs',{force: true});
        cy.contains('Track').should('exist');
        
        //Search app by name
        cy.get('input[id="react-select-2-input"]').type('Сбербанк',{force: true});
        cy.contains('.appOption__title', 'СберБанк Онлайн') // Находим элемент, содержащий текст "СберБанк Онлайн"
            .parents('.appSearchSelect__option') // Находим родительский элемент с классом appSearchSelect__option
            .within(() => { // Выполняем действия внутри найденного родительского элемента
                cy.get('[data-testid="icon-rustore"]') // Находим элемент с атрибутом data-testid="icon-rustore" внутри родительского элемента
                    .should('exist'); // Проверяем, что элемент существует
    
                cy.contains('Track') // Находим кнопку с текстом 'Track' внутри родительского элемента
                    .click(); // Выполняем клик на кнопку
        });


        //Search app by URL in the wrong country
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.contains('Track').should('not.be.visible');

        // //Search app by URL in the wrong country
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('input[id="react-select-2-input"]').clear().type('ru.sberbankmobile-rs',{force: true});
        cy.contains('Track').should('not.be.visible');
    })

    it('Track rustore app', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Track app
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="appSearchSelect__control css-yk16xz-control"]').type('https://www.rustore.ru/catalog/app/ru.sberbankmobile');
        cy.get('button[class="btn btn-xs btn-primary"]').contains('Track').click();
        cy.wait(5000);
    })

    it('RuStore app only in RU locale', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Check rustore app in CA locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Canada').click();
        cy.get('div[class="dashboardAppList"]').contains('Сбербанк').should('not.exist')

        //Check rustore app in RU locale
        cy.get('div[class="countriesDropdown_dropdown__rV6Yj ml-8 dropdown"]').click();
        cy.contains('Russia').click();
        cy.get('div[class="dashboardAppList"]').contains('Сбербанк').should('be.visible')
    })

    it('Untrack RuStore app', () => {

        //Sign in
        auth.signIn('igor_i+rustore@asodesk.com');

        //Untrack button click
        cy.contains('.dashboardAppCard', 'СберБанк Онлайн').find('.ml5.remove.cursor.dashboardAppCard__activeButton').click();

        //Remove button click
        cy.get('button[class="buttonElement buttonElement--default buttonElement--lg buttonElement--solid buttonElement--block rounded-4"]').click();
        
        //Check that the app has been removed
        cy.contains('.dashboardAppCard', 'СберБанк Онлайн').should('not.be.exist');
    })

})    