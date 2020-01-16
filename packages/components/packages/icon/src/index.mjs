import {Base} from '@jrg/base';
import template from './template.html';
import style from './style.css';

export class IconButton extends Base {
  constructor() {
    super();
    this.baseColor = this.getAttribute('base-color') || "lightsgrey";
    this.icon = this.getAttribute('icon') || 'home';
    this.template = template;
    this.addStyle('main', style);
    this.render();
  }
}
customElements.get('jrg-icon-button') ||
  customElements.define('jrg-icon-button', IconButton, {});
