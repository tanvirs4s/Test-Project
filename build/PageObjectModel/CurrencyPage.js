'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TestData = require('../HelperMethods/TestData');

var _TestData2 = _interopRequireDefault(_TestData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrencyPage = function () {
  function CurrencyPage() {
    _classCallCheck(this, CurrencyPage);
  }

  _createClass(CurrencyPage, [{
    key: 'goTocurrencyPage',
    value: function goTocurrencyPage() {
      var allGeneralMenu = $('#menu-ui');
      this.generalLink.click();
      allGeneralMenu.waitForVisible(5000);
      this.currencyLink.click();
    }
  }, {
    key: 'addNewCurrencies',
    value: function addNewCurrencies() {
      var currencyCode = _TestData2.default.generateUniqueCurrencyCode();
      this.addNewCurrency.click();
      this.currencyName.waitForVisible(5000);
      this.currencyName.click();
      this.currencyName.setValue('American Dollar');
      this.currencySymbol.setValue('$');
      this.currencyCode.setValue(currencyCode);
      this.currencyRate.setValue('82.5');
      this.currencyActive.click();
      this.currencyActiveNo.waitForVisible(5000);
      this.currencyActiveNo.click();
      this.saveAndReturn.click();
    }
  }, {
    key: 'addNewCurrencyWithNoData',
    value: function addNewCurrencyWithNoData() {
      this.addNewCurrency.click();
      this.currencyName.waitForVisible(5000);
      this.saveAndReturn.click();
      this.errorMessageforBlankData.waitForVisible(5000);
    }
  }, {
    key: 'currencyPageTitle',
    get: function get() {
      return $('#content > div.panel.panel-default > div.panel-heading');
    }
  }, {
    key: 'generalLink',
    get: function get() {
      return $('//*[@id="social-sidebar-menu"]/li[4]/a');
    }
  }, {
    key: 'currencyLink',
    get: function get() {
      return $('//*[@id="menu-ui"]/li[2]/a');
    }
  }, {
    key: 'addNewCurrency',
    get: function get() {
      return $('.btn.btn-success.xcrud-action');
    }
  }, {
    key: 'currencyName',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[1]/div/input');
    }
  }, {
    key: 'currencySymbol',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[2]/div/input');
    }
  }, {
    key: 'currencyCode',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[3]/div/input');
    }
  }, {
    key: 'currencyRate',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[4]/div/input');
    }
  }, {
    key: 'currencyActive',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select');
    }
  }, {
    key: 'currencyActiveYes',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select/option[1]');
    }
  }, {
    key: 'currencyActiveNo',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select/option[2]');
    }
  }, {
    key: 'saveAndReturn',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[1]/a[1]');
    }
  }, {
    key: 'errorMessageforBlankData',
    get: function get() {
      return $('#content > div.panel.panel-default > div:nth-child(3) > div > div > div.xcrud-message.error');
    }
  }, {
    key: 'returnButton',
    get: function get() {
      return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[1]/a[4]');
    }
  }]);

  return CurrencyPage;
}();

exports.default = new CurrencyPage();