import template from './template.html';
import style from './style.css';

import font from '@jrg-material/theme/font.css';
import effects from '@jrg-material/theme/effects.css';

if(!Base){
    console.error(`Base not found please load core project`);
}

export class Button extends Base {
  constructor() {
    super();
    this.template = template;
    this.addStyle(font, 'font');
    this.addStyle(effects, 'effects');
    this.addStyle(style);
  }
  connectedCallback() {
    this.height = this.getAttribute('height') || '36px';
    this.baseColor = this.getAttribute('base-color') || 'rgba(144, 202, 249, 0.5)';
    this.inverted = !!this.getAttribute('inverted');
    super.connectedCallback();
  }
}

customElements.define('jrg-button', Button, {});
