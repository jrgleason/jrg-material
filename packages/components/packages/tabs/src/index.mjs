import template from './template.html';
import style from './style.css';

import { Tab } from './tab/index.mjs';
import { TextTab } from './text-tab/index.mjs';
import { IconTab } from './icon-tab/index.mjs';

if(!Base){
    console.error(`Base not found please load core project`);
}

/**
* This is a tab container
*/
class Tabs extends Base {

  constructor() {
    super();
    this.template = template;
    this.addStyle(style);
  }

  /**
  * Is the tab container outlined?
  * @type {boolean}
  */
  get outlined(){
    return !this.contained && this.border;
  }

  /**
  * Sets the javascript properties given the HTML attributes
  */
  setAttributes(){
    this.minHeight = this.getAttribute("min-height") || '48px';
    this.isFixed = this.getAttribute("fixed") == null ? true : !!this.getAttribute("fixed");
  }

  /**
  * Overrides the connectedCallback to handle rendering when the element is added to DOM
  */
  connectedCallback() {
    this.setAttributes();
    super.connectedCallback();
  }
}

Base.CREATE_ELEMENT('jrg-tabs', Tabs, {});

export {Tabs, Tab, TextTab, IconTab}
