'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountPage = function () {
  function AccountPage() {
    _classCallCheck(this, AccountPage);
  }

  _createClass(AccountPage, [{
    key: 'goToCustomersLink',
    value: function goToCustomersLink() {
      var allAccountsMenu = $('=CUSTOMERS');
      this.accountsLink.click();
      allAccountsMenu.waitForExist(5000);
      this.customersLink.click();
    }
  }, {
    key: 'accountsLink',
    get: function get() {
      return $('//*[@id="social-sidebar-menu"]/li[5]/a');
    }
  }, {
    key: 'customersLink',
    get: function get() {
      return $('//*[@id="ACCOUNTS"]/li[3]/a');
    }
  }]);

  return AccountPage;
}();

exports.default = new AccountPage();