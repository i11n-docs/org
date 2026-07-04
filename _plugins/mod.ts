import { merge } from "lume/core/utils/object.ts";
import siteMap from 'lume/plugins/sitemap.ts';
import favicon from 'lume/plugins/favicon.ts';
import date from 'lume/plugins/date.ts';
import metas from 'lume/plugins/metas.ts';
import jsonLD from 'lume/plugins/json_ld.ts';
import relations from 'lume/plugins/relations.ts';
import prism from "lume/plugins/prism.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import slugifyURLs from "lume/plugins/slugify_urls.ts";

import { alert } from "mdit-alerts";

import { defaultOptions, type PluginOptions } from "./options.ts";

export function configureSite(pluginOptions: Partial<PluginOptions> = defaultOptions) {
  const plugins = merge(defaultOptions, pluginOptions);

  return (site: Lume.Site) => {
    site
      .use(siteMap(plugins.siteMap))
      .use(favicon(plugins.favicon))
      .use(date(plugins.date))
      .use(metas())
      .use(jsonLD())
      .use(relations(plugins.relations))
      .use(prism(plugins.syntaxHighlighter))
      .use(slugifyURLs(plugins.slugify))
      .use(checkUrls(plugins.checkUrls));

    site
      .add("uploads")
      .add("style.css");

    site.hooks.addMarkdownItPlugin(alert);
  }
}