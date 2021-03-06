import Reader from "ramda-fantasy/src/Reader";
import { concat } from "sanctuary";
import Moment from "moment";
import { extendMoment } from "moment-range";

export const reader = Reader;

export const sanctuaryConcat = (f1, f2) => concat(f1, f2);

export const moment = extendMoment(Moment);

export default reader;
