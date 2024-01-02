"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal-component.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModalComponent = _ref => {
  let {
    type = "text",
    label,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "simple-form-group"
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    className: "simple-text-label"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "test"
  }, "Ceci est un test"), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "simple-text-input",
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }));
};
var _default = exports.default = ModalComponent;