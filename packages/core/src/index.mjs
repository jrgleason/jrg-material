import { Base } from './Base.mjs';
import { ShadowElement } from './ShadowElement.mjs';
// Add Mustache Globally
if(typeof Mustache !== 'undefined'){
  console.error("Mustache not found, templates not supported");
  window.Mustache = {
     render: (template) => template
  }
}
function CREATE_ELEMENT(name, object, params) {
  customElements.get(name) ||
        customElements.define(name, object, params);
}
if(window){
    window.Base = Base;
    window.ShadowElement = ShadowElement;
    window.CREATE_ELEMENT = CREATE_ELEMENT;
}
