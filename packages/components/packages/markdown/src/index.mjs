if(!showdown){
  console.log("Showdown not found, Markdown not supported");
}
if(!Base){
    console.error(`Base not found please load core project`);
}
import {Markdown} from './markdown/index.mjs';
import {MarkdownEditor} from './editor/index.mjs';
Base.CREATE_ELEMENT('jrg-markdown', Markdown, {});
Base.CREATE_ELEMENT('jrg-markdown-editor', MarkdownEditor, {});
export {Markdown, MarkdownEditor}