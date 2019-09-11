'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToursPage = function () {
  function ToursPage() {
    _classCallCheck(this, ToursPage);
  }

  _createClass(ToursPage, [{
    key: 'goToToursLink',
    value: function goToToursLink() {
      var toursLinkText = $('=TOURS');
      this.toursLink.click();
      toursLinkText.waitForExist(5000);
      this.tourInsideLink.click();
      browser.pause(5000);
    }
  }, {
    key: 'toursLink',
    get: function get() {
      return $('//*[@id="social-sidebar-menu"]/li[11]/a');
    }
  }, {
    key: 'tourInsideLink',
    get: function get() {
      return $('//*[@id="Tours"]/li[1]/a');
    }
  }, {
    key: 'toursPageTitle',
    get: function get() {
      return $('#content > div.panel.panel-default > div.panel-heading');
    }
  }]);

  return ToursPage;
}();

exports.default = new ToursPage();