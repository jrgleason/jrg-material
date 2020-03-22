import template from './template.html';
import style from './style.scss';

import font from '@jrg-material/theme/font.css';
import effects from '@jrg-material/theme/effects.css';

if(!Base){
    console.error(`Base not found please load core project`);
}

export class MdcButton extends Base {
  constructor() {
    super();
    this.template = template;
    this.addStyle(font, 'font');
    this.addStyle(effects, 'effects');
    this.addStyle(style);
    this.refreshAttributes();
  }

  refreshAttributes(){
    this.height = this.getAttribute('height') || '36px';
    this.baseColor = this.getAttribute('base-color') || 'rgba(144, 202, 249, 0.5)';
    this.contained = !!this.getAttribute('contained');
    this.border = this.getAttribute('border') === 'false'? false : true;
  }

  static get observedAttributes() { return ['height']; }

  get outlined(){
    return !this.contained && this.border;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'height'){
      changeHeight(newValue)
    }
  }
}

Base.CREATE_ELEMENT('jrg-mdc-button', MdcButton, {});
