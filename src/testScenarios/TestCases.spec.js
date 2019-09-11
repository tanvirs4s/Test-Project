import loginPage from '../PageObjectModel/LoginPage';
import tourPage from '../PageObjectModel/ToursPage';
import currencyPage from '../PageObjectModel/CurrencyPage'
const expect = require('chai').expect;

describe('Currencies functionality:', () => {
    it('- should show the correct page title and page url.', () => {
        loginPage.loginWithCredentials("admin@phptravels.com","demoadmin");
        const menuBar = $('#social-sidebar-menu');
        menuBar.waitForExist(5000);
        currencyPage.goTocurrencyPage();
        expect(browser.getUrl()).to.contains('https://www.phptravels.net/admin/settings/currencies/');
        expect(currencyPage.currencyPageTitle.getText()).to.equal('CURRENCIES MANAGEMENT')
    })
    it('- should show error message if currency creation have no data',()=>{
        currencyPage.addNewCurrencyWithNoData();
        expect(currencyPage.errorMessageforBlankData.getText()).to.equal('Some fields are likely to contain errors. Fix errors and try again.');
        browser.pause(10000);
        currencyPage.returnButton.click();
    })
    it('- should able to create new currency from add currency',()=>{
        currencyPage.addNewCurrency.waitForVisible(5000);
        currencyPage.addNewCurrencies();
    })
})

describe('Tours functionality:',()=>{
    it('- should show the correct page title and page url.',()=>{
        loginPage.loginWithCredentials("admin@phptravels.com","demoadmin");
        const menuBar = $('#social-sidebar-menu');
        menuBar.waitForExist(5000);
        tourPage.goToToursLink();
        const getToursPageTitle = tourPage.toursPageTitle.getText();
        expect(getToursPageTitle).to.equal('TOURS MANAGEMENT');
        expect(browser.getUrl()).to.contains('https://www.phptravels.net/admin/tours');
    })
})


