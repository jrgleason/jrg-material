import template from './template.html';
import style from './style.css';

import font from '@jrg-material/theme/font.css';

if(!Base){
    console.error(`Base not found please load core project`);
}

export class Tab extends Base {
  constructor(name) {
    super();
    this.template = template;
    this.addStyle(font, 'font');
    this.addStyle(style);
    this.name = name;
  }

  static get observedAttributes() { return ['selected']}

  get outlined(){
    return !this.contained && this.border;
  }

  attributeChangedCallback(){
    console.log('Attribute callback test.');
  }

  getAttributes(){
    this.baseColor = this.getAttribute('base-color') || 'lightblue';
    this.name = this.getAttribute('name') || this.name;
    this.selected = !!this.getAttribute('selected');
  }

  connectedCallback() {
    this.getAttributes();
    super.connectedCallback();
  }
}

Base.CREATE_ELEMENT('jrg-tab', Tab, {});
