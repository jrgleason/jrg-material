import template from './template.html';
import style from './style.css';

import { Tab } from './tab/index.mjs';
import { TextTab } from './text-tab/index.mjs';
import { IconTab } from './icon-tab/index.mjs';

if(!Base){
    console.error(`Base not found please load core project`);
}

class Tabs extends Base {
  constructor() {
    super();
    this.template = template;
    this.addStyle(style);
  }

  static get observedAttributes() {}

  get outlined(){
    return !this.contained && this.border;
  }

  set tabs(tabs){
    const parent = this.shadowRoot.getElementById("jrg-tab-area");
    this.removeTabs();
    if(!parent) throw new Error("Cannot find tab area!");
    tabs.forEach((tab)=>{
        const element = new Tab(tab);
        parent.appendChild(element);
    })
  }

  removeTabs(){
    const childNodes = Array.from(shadow.childNodes);
    childNodes.forEach(childNode => {
        if(childNode.nodeName === "JRG-TAB"){
            childNode.parentNode.removeChild(childNode);
        }
    })
  }

  setAttributes(){
    this.minHeight = this.getAttribute("min-height") || '48px';
    this.isFixed = this.getAttribute("fixed") == null ? true : !!this.getAttribute("fixed");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue !== newValue){
        this.setAttributes();
    }
  }

  connectedCallback() {
    this.setAttributes();
    super.connectedCallback();
  }
}

Base.CREATE_ELEMENT('jrg-tabs', Tabs, {});

export {Tabs, Tab, TextTab, IconTab}
