function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as R from "ramda";

var checkValue = function checkValue(_ref) {
  var key = _ref.key,
      curr = _ref.curr,
      mod = _ref.mod;
  return R.equals(R.prop(key, curr), R.prop(key, mod)) ? R.prop(key, curr) : "".concat(R.prop(key, mod), " -> ").concat(R.prop(key, curr));
};

var getOkData = function getOkData(_ref2) {
  var val = _ref2.val,
      curr = _ref2.curr,
      mod = _ref2.mod;
  return R.map(function (k) {
    return _defineProperty({}, k, checkValue({
      key: k,
      curr: curr,
      mod: mod
    }));
  }, val);
};

var getPkData = function getPkData(_ref4) {
  var val = _ref4.val,
      data = _ref4.data;
  return R.map(function (k) {
    return _defineProperty({}, k, R.prop(k, data));
  }, val);
};

var mapDiff = function mapDiff(_ref6) {
  var curr = _ref6.curr,
      mod = _ref6.mod,
      primaryKeys = _ref6.primaryKeys,
      diffKeys = _ref6.diffKeys;
  var createPkDataCurr = getPkData({
    val: primaryKeys,
    data: curr
  });
  var createPkDataMod = getPkData({
    val: primaryKeys,
    data: mod
  });
  return R.equals(createPkDataCurr, createPkDataMod) ? R.pipe(function (val) {
    return getOkData({
      val: val,
      curr: curr,
      mod: mod
    });
  }, R.concat(createPkDataCurr), R.mergeAll)(diffKeys) : {};
};

var removeModified = function removeModified(_ref7) {
  var k = _ref7.k,
      pk = _ref7.pk,
      arr = _ref7.arr;
  return R.pipe(function (x) {
    return R.flatten(x);
  }, R.map(function (x) {
    return R.prop(pk, x);
  }), R.contains(R.prop(pk, k)), R.not)(arr);
};

var indexResult = function indexResult(_ref8) {
  var current = _ref8.current,
      pk = _ref8.pk,
      removed = _ref8.removed,
      added = _ref8.added,
      modified = _ref8.modified;
  return R.pipe(R.filter(function (k) {
    return removeModified({
      k: k,
      pk: pk,
      arr: [removed, added, modified]
    });
  }), R.concat([modified, added, removed]), R.flatten, R.sortBy(R.prop(pk)))(current);
};

var getColKeys = function getColKeys(list, primaryKeys) {
  return R.compose(R.filter(function (x) {
    return !R.contains(x, primaryKeys);
  }), R.keys)(list);
};

export var diff = function diff(_ref9) {
  var prev = _ref9.prev,
      current = _ref9.current,
      primaryKeys = _ref9.primaryKeys,
      diffKeys = _ref9.diffKeys,
      indexed = _ref9.indexed;

  var cmp = function cmp(x, y) {
    return R.all(function (z) {
      return R.eqProps(z, x, y);
    }, primaryKeys);
  };

  var currentChages = R.difference(current, prev);
  var previousChages = R.difference(prev, current);
  var removes = R.differenceWith(cmp, previousChages, currentChages);
  var adds = R.differenceWith(cmp, currentChages, previousChages);
  var previousVals = R.difference(previousChages, removes);
  var statusModifiedPrevious = R.map(R.assoc("@@", "->"))(previousVals);

  var diffItem = function diffItem(curr) {
    return R.map(function (mod) {
      return mapDiff({
        curr: curr,
        mod: mod,
        primaryKeys: primaryKeys,
        diffKeys: R.isNil(diffKeys) ? getColKeys(mod, primaryKeys) : diffKeys
      });
    }, statusModifiedPrevious);
  };

  var statusAdded = R.map(R.assoc("@@", "+++"))(adds);
  var statusRemoved = R.map(R.assoc("@@", "---"))(removes);
  var addRemoveArray = R.concat(statusAdded, statusRemoved);
  var modified = R.filter(R.compose(R.not, R.isEmpty), R.flatten(R.map(diffItem, current)));
  return indexed ? indexResult({
    current: current,
    pk: R.head(primaryKeys),
    removed: statusRemoved,
    added: statusAdded,
    modified: modified
  }) : R.concat(modified, addRemoveArray);
};
export default diff;