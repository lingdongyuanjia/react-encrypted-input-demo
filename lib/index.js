"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.scss");
var _eye = _interopRequireDefault(require("./assets/eye.png"));
var _closeEye = _interopRequireDefault(require("./assets/close-eye.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// 保存光标位置
var selectionStart = 0,
  selectionEnd = 0;
var EncryptedInput = function EncryptedInput(_ref) {
  var _ref$initValue = _ref.initValue,
    initValue = _ref$initValue === void 0 ? '' : _ref$initValue,
    _ref$front = _ref.front,
    front = _ref$front === void 0 ? 0 : _ref$front,
    _ref$end = _ref.end,
    end = _ref$end === void 0 ? 0 : _ref$end,
    _ref$showIcon = _ref.showIcon,
    showIcon = _ref$showIcon === void 0 ? _eye["default"] : _ref$showIcon,
    _ref$closeIcon = _ref.closeIcon,
    closeIcon = _ref$closeIcon === void 0 ? _closeEye["default"] : _ref$closeIcon,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  // 显示小眼睛icon
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  // 明文
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  // 脱敏后的字符
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    mValue = _useState6[0],
    setMValue = _useState6[1];
  // 获取input的节点
  var inputRef = (0, _react.useRef)(null);
  // 更新value
  (0, _react.useEffect)(function () {
    if (initValue) {
      setValue(initValue);
      handleFormat(initValue);
    }
  }, [initValue]);
  // 设置input值
  (0, _react.useEffect)(function () {
    if (inputRef.current) {
      inputRef.current.value = show ? value : mValue;
      // 还原光标位置，因为重新设置值后，页面刷新会导致光标回到最末尾的位置
      inputRef.current.setSelectionRange(selectionStart, selectionEnd);
    }
  }, [show, value, mValue]);
  // 脱敏处理
  var handleFormat = function handleFormat(value) {
    if (!value) {
      setMValue('');
      return;
    }
    var str = '';
    var len = value.length;
    var star = Math.max(0, len - (Number(front) + Number(end)));
    if (len <= Number(front) + Number(end)) {
      str = value;
    } else {
      str = value.slice(0, Number(front)) + '*'.repeat(star) + value.slice(Number(front) + star);
    }
    setMValue(str);
    return str;
  };
  var handleChange = function handleChange(e) {
    if (inputRef.current.cnIputFlag) return;
    // 获取光标
    selectionStart = e.target.selectionStart;
    selectionEnd = e.target.selectionEnd;
    // 光标位置
    var ind = selectionStart - 1;
    var actualVal = value || '';
    var currentVal = e.target.value;
    var isAdd = currentVal.length > actualVal.length;
    var num = Math.abs(currentVal.length - actualVal.length);
    if (isAdd) {
      actualVal = actualVal.slice(0, ind - num + 1) + currentVal.slice(ind - num + 1, ind + 1) + actualVal.slice(ind - num + 1);
    } else {
      actualVal = actualVal.slice(0, ind + 1) + actualVal.slice(ind + num + 1);
    }
    setValue(actualVal);
    handleFormat(actualVal);
  };
  // 主要为了校验是否在进行中文输入
  var composition = function composition(e) {
    if (e.type === 'compositionend') {
      inputRef.current.cnIputFlag = false;
      handleChange(e);
    } else {
      inputRef.current.cnIputFlag = true;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-encrypted-input-wrap"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    style: (style === null || style === void 0 ? void 0 : style.input) || {},
    onChange: function onChange(e) {
      return handleChange(e);
    },
    onCompositionStart: composition,
    onCompositionEnd: composition
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: "icon",
    src: show ? showIcon : closeIcon,
    onClick: function onClick() {
      return setShow(show ^ 1);
    },
    style: (style === null || style === void 0 ? void 0 : style.icon) || {}
  }));
};
var _default = EncryptedInput;
exports["default"] = _default;