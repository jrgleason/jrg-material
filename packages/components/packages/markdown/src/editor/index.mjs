import template from './template.html';
import style from './style.scss'
import { Markdown } from '../markdown/index.mjs'
export class MarkdownEditor extends Base {
    constructor(){
      super();
      this.template = template;
      this.addStyle(style);
    }
    onTextAreaChanged(event){
      this.element.markdown = event.target.value;
      this.element.connectedCallback();
    }
    onPropertyChange(){
      // IE-specific event handling code
      // TODO: We should add this just in case
    }
    attachEvents(area){
      if (area.addEventListener) {
        area.addEventListener('input', this.onTextAreaChanged.bind(this), false);
      } else if (area.attachEvent) {
        area.attachEvent('onpropertychange', this.onPropertyChange.bind(this));
      }
    }
    connectedCallback() {
        super.connectedCallback();
        const area = this.shadowRoot.getElementById("jrg-markdown-text");
        this.attachEvents(area);
        const markdown = area.value;
        console.log(`The markdown is ${markdown}`)
        this.element = new Markdown(markdown);
        this.shadowRoot.append(this.element);
    }
}