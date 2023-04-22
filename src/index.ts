/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from "./base";
import { Database } from "./database";
import { applyMixins } from "./utils";

class Tigris extends Base {}
interface Tigris extends Database {}
applyMixins(Tigris, [Database]);

export default Tigris;
