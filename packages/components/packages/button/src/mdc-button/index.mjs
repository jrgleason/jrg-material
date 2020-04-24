import template from './template.html';
import style from './style.scss';
import { Button } from '../index.mjs'

if(!Base){
    console.error(`Base not found please load core project`);
}

export class MdcButton extends Button {
  constructor() {
    super();
    this.template = template;
    this.addStyle(style);
  }
}

Base.CREATE_ELEMENT('jrg-mdc-button', MdcButton, {});
