"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildRequest = void 0;

var R = _interopRequireWildcard(require("ramda"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var dataChecker = R.pipe(R.filter(R.propSatisfies(function (x) {
  return x !== "Delete";
}, "mod")), R.map(R.map(function (x) {
  return R.equals(x, "") ? null : x;
})));

var buildRequest = function buildRequest(_ref) {
  var data = _ref.data,
      eTag = _ref.eTag,
      type = _ref.type;
  return {
    table: dataChecker(data),
    eTag: eTag,
    type: type
  };
};

exports.buildRequest = buildRequest;
var _default = buildRequest;
exports.default = _default;