import * as R from "ramda";
var dataChecker = R.pipe(R.filter(R.propSatisfies(function (x) {
  return x !== "Delete";
}, "mod")), R.map(R.map(function (x) {
  return R.equals(x, "") ? null : x;
})));
export var buildRequest = function buildRequest(_ref) {
  var data = _ref.data,
      eTag = _ref.eTag,
      type = _ref.type;
  return {
    table: dataChecker(data),
    eTag: eTag,
    type: type
  };
};
export default buildRequest;