"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal-component.css");
var _modalClose = _interopRequireDefault(require("./images/modal-close.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModalComponent = _ref => {
  let {
    isOpen,
    onClose,
    modalContent,
    overlayStyle,
    modalStyle,
    contentStyle,
    imgStyle
  } = _ref;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: overlayStyle,
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyle,
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: contentStyle
  }, modalContent), /*#__PURE__*/_react.default.createElement("img", {
    style: imgStyle,
    src: _modalClose.default,
    alt: "",
    className: "close-button",
    onClick: onClose
  }))));
};
var _default = exports.default = ModalComponent;