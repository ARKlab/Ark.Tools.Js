import * as R from "ramda";

const checkValue = ({ key, curr, mod }: { key: string; curr: any; mod: any }) =>
  R.equals(R.prop(key, curr), R.prop(key, mod))
    ? R.prop(key, curr)
    : `${R.prop(key, mod)} -> ${R.prop(key, curr)}`;

const getOkData = ({ val, curr, mod }: { val: any; curr: any; mod: any }) =>
  R.map(
    k => ({
      [k]: checkValue({ key: k, curr, mod })
    }),
    val
  );

const getPkData = ({ val, data }: { val: any; data: any }) =>
  R.map(
    k => ({
      [k]: R.prop(k, data)
    }),
    val
  );

const mapDiff = ({
  curr,
  mod,
  primaryKeys,
  diffKeys
}: {
  curr: any;
  mod: any;
  primaryKeys: any;
  diffKeys: any;
}) => {
  const createPkDataCurr = getPkData({ val: primaryKeys, data: curr });
  const createPkDataMod = getPkData({ val: primaryKeys, data: mod });

  return R.equals(createPkDataCurr, createPkDataMod)
    ? R.pipe(
        (val: any) => getOkData({ val, curr, mod }),
        R.concat(createPkDataCurr),
        R.mergeAll
      )(diffKeys)
    : {};
};

const removeModified = ({ k, pk, arr }: { k: any; pk: any; arr: any }) =>
  R.pipe(
    (x: any) => R.flatten(x),
    R.map((x: any) => R.prop(pk, x)),
    R.contains(R.prop(pk, k)),
    R.not
  )(arr);

const indexResult = ({
  current,
  pk,
  removed,
  added,
  modified
}: {
  current: any;
  pk: any;
  removed: any;
  added: any;
  modified: any;
}) =>
  R.pipe(
    R.filter<any, any>(k =>
      removeModified({ k, pk, arr: [removed, added, modified] })
    ),
    R.concat([modified, added, removed]),
    R.flatten,
    R.sortBy(R.prop(pk))
  )(current);

const getColKeys = (list: any, primaryKeys: any) =>
  R.compose(
    R.filter<any, any>(x => !R.contains(x, primaryKeys)),
    R.keys
  )(list);

export const diff = ({
  prev,
  current,
  primaryKeys,
  diffKeys,
  indexed
}: {
  prev: any;
  current: any;
  primaryKeys?: any;
  diffKeys?: any;
  indexed?: any;
}) => {
  const cmp = (x: any, y: any) =>
    R.all((z: any) => R.eqProps(z, x, y), primaryKeys);

  const currentChages = R.difference(current, prev);
  const previousChages = R.difference(prev, current);
  const removes = R.differenceWith(cmp, previousChages, currentChages);
  const adds = R.differenceWith(cmp, currentChages, previousChages);
  const previousVals = R.difference(previousChages, removes);
  const statusModifiedPrevious = R.map(R.assoc("@@", "->"))(previousVals);
  const diffItem = (curr: any) =>
    R.map(
      mod =>
        mapDiff({
          curr,
          mod,
          primaryKeys,
          diffKeys: R.isNil(diffKeys) ? getColKeys(mod, primaryKeys) : diffKeys
        }),
      statusModifiedPrevious
    );

  const statusAdded = R.map(R.assoc("@@", "+++"))(adds);
  const statusRemoved = R.map(R.assoc("@@", "---"))(removes);

  const addRemoveArray = R.concat(statusAdded, statusRemoved);
  const modified = R.filter(
    R.compose(
      R.not,
      R.isEmpty
    ),
    R.flatten(R.map(diffItem, current))
  );

  return indexed
    ? indexResult({
        current,
        pk: R.head(primaryKeys),
        removed: statusRemoved,
        added: statusAdded,
        modified
      })
    : R.concat(modified, addRemoveArray);
};

export default diff;
