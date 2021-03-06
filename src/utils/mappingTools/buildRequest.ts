import * as R from "ramda";

const dataChecker = R.pipe(
  R.filter<any, any>(R.propSatisfies(x => x !== "Delete", "mod")),
  R.map(R.map(x => (R.equals(x, "") ? null : x)))
);

export const buildRequest = ({
  data,
  eTag,
  type
}: {
  data: any;
  eTag: string;
  type: string;
}) => ({
  table: dataChecker(data),
  eTag,
  type
});

export default buildRequest;
