
import { type Options as SitemapOptions, defaults as SitemapDefaults } from 'lume/plugins/sitemap.ts';
import { type Options as FaviconOptions, defaults as FaviconDefaults } from 'lume/plugins/favicon.ts';
import { type Options as DateOptions, defaults as DateDefaults } from 'lume/plugins/date.ts';
import { type Options as RelationOptions, defaults as RelationDefaults } from 'lume/plugins/relations.ts';
import { type Options as PrismOptions, defaults as PrismDefaults } from "lume/plugins/prism.ts";
import { type Options as SlugifyUrlOptions, defaults as SlugifyUrlDefaults } from "lume/plugins/slugify_urls.ts";
import { type Options as CheckUrlOptions, defaults as CheckUrlDefaults } from "lume/plugins/check_urls.ts";
// import { Options as HighlightOptions } from "lume/plugins/code_highlight.ts";
import { merge } from "lume/core/utils/object.ts";

//TODO(@ebntly): Create tagged union for syntaxHighlighter options for all supported highligter.

export interface PluginOptions {
  siteMap: Partial<SitemapOptions>;
  favicon: Partial<FaviconOptions>;
  relations: RelationOptions;
  date: Partial<DateOptions>;
  syntaxHighlighter: Partial<PrismOptions>;
  slugify: Partial<SlugifyUrlOptions>;
  checkUrls: Partial<CheckUrlOptions>;
};

const sourceDefaults: PluginOptions = {
  date: DateDefaults,
  favicon: FaviconDefaults,
  siteMap: SitemapDefaults,
  relations: RelationDefaults,
  syntaxHighlighter: PrismDefaults,
  slugify: SlugifyUrlDefaults,
  checkUrls: CheckUrlDefaults,
}

export const defaultOptions: PluginOptions = merge(sourceDefaults, {
  favicon: {
    input: 'favicon.png',
  },
  siteMap: {
    filename: 'sitemap.xml',
  },
  slugify: {
    
  },
  checkUrls: {

  },
  date: {
    formats: {
      //TODO(@ebntly): Add more formats based on https://date-fns.org/v2.22.0/docs/format
      ISO: 'MM-DD-YYYYTHH:mm:ssZ',
      DATE: 'MM-DD-YYYY',
      TIME: 'HH:mm:ss',
      HUMAN_DATE: 'MMMM D, YYYY',
      HUMAN_DATE_TIME: 'MMMM D, YYYY [at] HH:mm:ss',
      HUMAN_TIME: 'HH:mm',
    },
  },
  relations: {
    idKey: 'doc_id',
    typeKey: 'doc_type',
    foreignKeys: {
      category: {
        foreignKey: 'category_id',
        relationKey: 'category',
        pluralRelationKey: 'categories'
      },
      author: {
        foreignKey: "author_id",
        relationKey: "author",
        pluralRelationKey: "authors",
      },
      addendum: {
        foreignKey: "addendum_id",
        relationKey: "addendum",
        pluralRelationKey: "addendums",
      }
    }
  },
  syntaxHighlighter: {

  }
});