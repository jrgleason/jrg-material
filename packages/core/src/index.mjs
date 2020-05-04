import { Base } from './Base.mjs';
import { ShadowElement } from './ShadowElement.mjs';
function CREATE_ELEMENT(name, object, params) {
  customElements.get(name) ||
        customElements.define(name, object, params);
}
if(window){
    // Add Mustache Globally
    if(typeof Mustache === 'undefined'){
      console.error("Mustache not found, templates not supported");
      window.Mustache = {
         render: (template) => template
      }
    }
    window.Base = Base;
    window.ShadowElement = ShadowElement;
    window.CREATE_ELEMENT = CREATE_ELEMENT;
}
export {CREATE_ELEMENT, ShadowElement, Base}
