import { Base } from 'Base.mjs';
import { ShadowElement } from 'ShadowElement';
// Add Mustache Globally
if(!Mustache){
  console.error("Mustache not found, templates not supported");
  Mustache = {
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
