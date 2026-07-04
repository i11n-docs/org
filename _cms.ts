import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document('Homepage', 'src:index.md', [
  'layout: hidden',
  'title: text',
  'description: textarea',
  'content: markdown',
]);

cms.upload({
  name: "images",
  label: "Image repository",
  description: "Here you can manage all images of your posts",
  store: "src:images",
});

cms.collection('Authors', 'src:authors/*.md', [
  'layout: hidden',
  'name: text',
  'github: text',
  {
    name: 'avatar',
    type: 'file',
    upload: 'images:{document_dirname}',
    relativePath: true,
  },
  'content: markdown',
]);

export default cms;