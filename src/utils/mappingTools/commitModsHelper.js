import Reader from "ramda-fantasy/src/Reader";
import { concat } from "sanctuary";

export const reader = Reader;

export const sanctuaryConcat = (f1, f2) => concat(f1, f2);

export default reader;
