import lume from "lume/mod.ts";
import { configureSite } from "./_plugins/mod.ts";

const site = lume();

configureSite()(site);

export default site;