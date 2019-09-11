'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Page2 = require('./Page');

var _Page3 = _interopRequireDefault(_Page2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Page) {
    _inherits(LoginPage, _Page);

    function LoginPage() {
        _classCallCheck(this, LoginPage);

        return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
    }

    _createClass(LoginPage, [{
        key: 'open',
        value: function open() {
            _get(LoginPage.prototype.__proto__ || Object.getPrototypeOf(LoginPage.prototype), 'open', this).call(this, '/admin');
        }
    }, {
        key: 'loginWithCredentials',
        value: function loginWithCredentials(userName, password) {
            this.open();
            this.emailAddress.setValue(userName);
            this.Password.setValue(password);
            browser.pause(3000);
            this.LoginButton.click();
        }
    }, {
        key: 'emailAddress',
        get: function get() {
            return $('/html/body/div[1]/form[1]/div[1]/input[1]');
        }
    }, {
        key: 'Password',
        get: function get() {
            return $('/html/body/div[1]/form[1]/div[1]/input[2]');
        }
    }, {
        key: 'LoginButton',
        get: function get() {
            return $('/html/body/div[1]/form[1]/button');
        }
    }]);

    return LoginPage;
}(_Page3.default);

exports.default = new LoginPage();