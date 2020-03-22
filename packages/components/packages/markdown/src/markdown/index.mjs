import template from './template.html';

export class Markdown extends Base{
  constructor(markdown){
    super();
    this.markdown = markdown;
  }
  connectedCallback() {
    this.template = this.markdown ? this.renderMarkdown(this.markdown) : template;
    super.connectedCallback();
  }
  renderMarkdown(markdown){
    const converter = new showdown.Converter();
    return converter.makeHtml(markdown);
  }
}