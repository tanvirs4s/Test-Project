'use strict';

var _LoginPage = require('../PageObjectModel/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _ToursPage = require('../PageObjectModel/ToursPage');

var _ToursPage2 = _interopRequireDefault(_ToursPage);

var _CurrencyPage = require('../PageObjectModel/CurrencyPage');

var _CurrencyPage2 = _interopRequireDefault(_CurrencyPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

// describe('Currencies functionality:', () => {
//     it('- should show the correct page title and page url.', () => {
//         loginPage.loginWithCredentials("admin@phptravels.com","demoadmin");
//         const menuBar = $('#social-sidebar-menu');
//         menuBar.waitForExist(5000);
//         currencyPage.goTocurrencyPage();
//         expect(browser.getUrl()).to.contains('https://www.phptravels.net/admin/settings/currencies/');
//         expect(currencyPage.currencyPageTitle.getText()).to.equal('CURRENCIES MANAGEMENT')
//     })
//     it('- should show error message if currency creation have no data',()=>{
//         currencyPage.addNewCurrencyWithNoData();
//         expect(currencyPage.errorMessageforBlankData.getText()).to.equal('Some fields are likely to contain errors. Fix errors and try again.');
//         browser.pause(10000);
//         currencyPage.returnButton.click();
//     })
//     it('- should able to create new currency from add currency',()=>{
//         currencyPage.addNewCurrency.waitForVisible(5000);
//         currencyPage.addNewCurrencies();
//     })
// })

describe('Tours functionality:', function () {
    it('- should show the correct page title and page url.', function () {
        _LoginPage2.default.loginWithCredentials("admin@phptravels.com", "demoadmin");
        var menuBar = $('#social-sidebar-menu');
        menuBar.waitForExist(5000);
        _ToursPage2.default.goToToursLink();
        var getToursPageTitle = _ToursPage2.default.toursPageTitle.getText();
        expect(getToursPageTitle).to.equal('TOURS MANAGEMENT');
        expect(browser.getUrl()).to.contains('https://www.phptravels.net/admin/tours');
    });
    it('- should show error message for blank add new tours creation', function () {});
});