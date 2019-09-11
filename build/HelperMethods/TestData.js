"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestData = function () {
  function TestData() {
    _classCallCheck(this, TestData);
  }

  _createClass(TestData, [{
    key: "generateUniqueCurrencyCode",
    value: function generateUniqueCurrencyCode() {
      var currencyCode = "USD";
      return currencyCode + Math.random().toString(12).substring(1, 5);
    }
  }]);

  return TestData;
}();

exports.default = new TestData();