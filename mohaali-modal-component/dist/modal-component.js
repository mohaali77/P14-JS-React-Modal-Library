"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal-component.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// lib/modal-component.js

const ModalComponent = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "Close"), children));
};
var _default = exports.default = ModalComponent;