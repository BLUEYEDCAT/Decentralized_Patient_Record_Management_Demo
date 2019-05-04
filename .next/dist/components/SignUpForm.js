'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _patient = require('../ethereum/patient/patient');

var _patient2 = _interopRequireDefault(_patient);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ipfs = require('../server/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sharp/Desktop/Solidity/DoChain/components/SignUpForm.js';


var SignUpForm = function (_Component) {
  (0, _inherits3.default)(SignUpForm, _Component);

  function SignUpForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SignUpForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SignUpForm.__proto__ || (0, _getPrototypeOf2.default)(SignUpForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      surname: '',
      givenname: '',
      gender: '',
      medicalno: '',
      age: '',
      email: '',
      phone: '',
      language: '',
      nationality: '',
      loading: false,
      visible: 'false',
      testing: 1555502789,
      file: '',
      ipfsHash: '',
      profilePic: '',
      continue: true
    }, _this.onFileChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var file, reader;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log('the file has been detected');
                file = event.target.files[0];
                reader = new window.FileReader();

                reader.readAsArrayBuffer(file);

                reader.onloadend = function () {
                  _this.setState({ file: Buffer(reader.result) });
                };

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var result, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:

                event.preventDefault();

                _context2.next = 3;
                return new _promise2.default(function (resolve, reject) {
                  _ipfs2.default.files.add(_this.state.file, function (err, result) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(result);
                    }
                  });
                });

              case 3:
                result = _context2.sent;

                _this.setState({ profilePic: result[0].hash });

                _this.setState({ loading: true, visible: 'true' });

                console.log('gender value is ' + _this.state.gender);
                _context2.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context2.sent;

                console.log('the value of profilepic is ' + _this.state.profilePic);

                if (!(_this.state.profilePic == '')) {
                  _context2.next = 15;
                  break;
                }

                console.log('waiting');
                _context2.next = 28;
                break;

              case 15:
                _context2.prev = 15;

                _this.setState({ continue: false });
                console.log('profile hash again ' + _this.state.profilePic);
                _context2.next = 20;
                return _patient2.default.methods.insertPatient(accounts[0], _this.state.surname, _this.state.givenname, _this.state.gender, _this.state.age, _this.state.email, _this.state.language, _this.state.nationality, _this.state.phone, _this.state.medicalno, _this.state.profilePic).send({
                  from: accounts[0]
                });

              case 20:
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2['catch'](15);

                console.log(_context2.t0);

              case 25:
                _context2.prev = 25;

                _this.setState({ loading: false, visible: 'false' });
                return _context2.finish(25);

              case 28:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[15, 22, 25, 28]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SignUpForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var GenderOptions = [{ key: 'm', text: 'Male', value: 'male' }, { key: 'f', text: 'Female', value: 'female' }];
      var languageOptions = [{ key: 'e', text: 'English', value: 'ENGLISH' }, { key: 'c', text: 'Chinese / 华语', value: 'CHINESE' }, { key: 'b', text: 'Bahasa Melayu', value: 'BAHASA MELAYU' }];
      var countryOptions = [{ key: 'm', text: 'Malaysia', value: 'Malaysia' }, { key: 'c', text: 'China', value: 'China' }, { key: 's', text: 'Singapore', value: 'Singapore' }];

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, 'Patient Surname'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.surname,
        onChange: function onChange(event) {
          return _this3.setState({ surname: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, 'Patient Given Name'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.givenname,
        onChange: function onChange(event) {
          return _this3.setState({ givenname: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, 'Gender'), _react2.default.createElement(_semanticUiReact.Dropdown, {
        placeholder: 'Gender',
        fluid: true,
        selection: true,
        options: GenderOptions,
        onChange: function onChange(event) {
          return _this3.setState({ gender: event.target.textContent });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }))), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, 'Patient Medical Number'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.medicalno,
        onChange: function onChange(event) {
          return _this3.setState({ medicalno: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, 'Patient Age'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.age,
        onChange: function onChange(event) {
          return _this3.setState({ age: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }))), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, 'Patient Email'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.email,
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, 'Patient Phone'), _react2.default.createElement(_semanticUiReact.Input, {

        value: this.state.phone,
        onChange: function onChange(event) {
          return _this3.setState({ phone: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }))), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, 'Patient Prefered Languages'), _react2.default.createElement(_semanticUiReact.Dropdown, {
        placeholder: 'Languages',
        fluid: true,
        selection: true,
        options: languageOptions,
        onChange: function onChange(event) {
          return _this3.setState({ language: event.target.textContent });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, 'Patient Nationality'), _react2.default.createElement(_semanticUiReact.Dropdown, {
        placeholder: 'Countries',
        fluid: true,
        selection: true,
        options: countryOptions,
        onChange: function onChange(event) {
          return _this3.setState({ nationality: event.target.textContent });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, ' Profile Picture'), _react2.default.createElement(_semanticUiReact.Input, {
        type: 'file',
        label: '.jpeg',
        labelPosition: 'right',
        onChange: this.onFileChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Submit',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      })), this.state.visible == 'true' ? _react2.default.createElement(_semanticUiReact.Message, {
        info: true,
        floating: true,
        header: 'Dont worry',
        content: 'this wont take long :)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }) : null));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var accounts, currentAddress, patientInfo;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                accounts = _web2.default.eth.getAccounts();
                currentAddress = accounts[0];
                _context3.next = 4;
                return _patient2.default.methods.getPatient(accounts[0]).call();

              case 4:
                patientInfo = _context3.sent;
                return _context3.abrupt('return', { Pname: patientInfo.patientName,
                  Pgender: patientInfo.patientGender,
                  Page: patientInfo.patientAge,
                  Pphone: patientInfo.patientPhone,
                  Pid: patientInfo.patientIndex
                });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return SignUpForm;
}(_react.Component);

exports.default = SignUpForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lnblVwRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkRpdmlkZXIiLCJEcm9wZG93biIsIkNhcmQiLCJJY29uIiwiQ29udGFpbmVyIiwiRm9ybSIsIk1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJTZWxlY3QiLCJQYXRpZW50Iiwid2ViMyIsImlwZnMiLCJTaWduVXBGb3JtIiwic3RhdGUiLCJzdXJuYW1lIiwiZ2l2ZW5uYW1lIiwiZ2VuZGVyIiwibWVkaWNhbG5vIiwiYWdlIiwiZW1haWwiLCJwaG9uZSIsImxhbmd1YWdlIiwibmF0aW9uYWxpdHkiLCJsb2FkaW5nIiwidmlzaWJsZSIsInRlc3RpbmciLCJmaWxlIiwiaXBmc0hhc2giLCJwcm9maWxlUGljIiwiY29udGludWUiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwic2V0U3RhdGUiLCJCdWZmZXIiLCJyZXN1bHQiLCJvblN1Ym1pdCIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlcnIiLCJoYXNoIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJpbnNlcnRQYXRpZW50Iiwic2VuZCIsImZyb20iLCJHZW5kZXJPcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwibGFuZ3VhZ2VPcHRpb25zIiwiY291bnRyeU9wdGlvbnMiLCJ0ZXh0Q29udGVudCIsInByb3BzIiwiY3VycmVudEFkZHJlc3MiLCJnZXRQYXRpZW50IiwiY2FsbCIsInBhdGllbnRJbmZvIiwiUG5hbWUiLCJwYXRpZW50TmFtZSIsIlBnZW5kZXIiLCJwYXRpZW50R2VuZGVyIiwiUGFnZSIsInBhdGllbnRB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VDtrQkFBWSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLFVBQVcsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQUw5RDs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLHdDQUFBLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2VBRkYsQUFHRTttQkFIRixBQUlFO2lCQUpGLEFBSVcsQUFDVDtrQkFBWSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWMsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUxqRTs7b0JBQUE7c0JBYkosQUFXRSxBQUVFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHFDQUFBLEFBQUM7Y0FBRCxBQUNTLEFBQ1A7ZUFGRixBQUVVLEFBQ1I7dUJBSEYsQUFHa0IsQUFDaEI7a0JBQVksS0FKZCxBQUltQjs7b0JBSm5CO3NCQTVHTixBQXFGRSxBQXFCRSxBQUVFLEFBZ0JGO0FBaEJFO0FBQ0UsNEJBZUosQUFBQztpQkFBRCxBQUNZLEFBQ1Y7aUJBRkY7O29CQUFBO3NCQWhJUixBQUlJLEFBNEhJLEFBUUY7QUFSRTtBQUNFLGdCQU9KLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IseUJBQVUsQUFBQztjQUFELEFBRTlCO2tCQUY4QixBQUc5QjtnQkFIOEIsQUFHckIsQUFDVDtpQkFKOEIsQUFJcEI7O29CQUpvQjtzQkFBaEMsQUFBZ0M7QUFBQTtBQUM5QixPQUQ4QixJQTFJeEMsQUFDRSxBQUNBLEFBNklhLEFBU2hCOzs7Ozs2RyxBQXJRNEI7Ozs7O21CQUNyQjtBLDJCQUFXLGNBQUEsQUFBSyxJLEFBQUwsQUFBUyxBQUNwQjtBLGlDQUFpQixTLEFBQUEsQUFBUzs7dUJBQ0wsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFdBQVcsU0FBM0IsQUFBMkIsQUFBUyxJLEFBQXBDLEFBQXdDOzttQkFBN0Q7QTtvREFFRSxPQUFRLFlBQVQsQUFBcUIsQUFDdEI7MkJBQVUsWUFEVCxBQUNxQixBQUN0Qjt3QkFBTyxZQUZOLEFBRWtCLEFBQ25COzBCQUFTLFlBSFIsQUFHb0IsQUFDckI7dUJBQU0sWSxBQUpMLEFBSWlCO0FBSmpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUEzQmMsQUErUnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNpZ25VcEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NoYXJwL0Rlc2t0b3AvU29saWRpdHkvRG9DaGFpbiJ9