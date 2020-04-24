import template from './template.html';
import style from './style.css';

if(!Base) console.error(
    'The base library was not found. Please run npm install --save @jrg-material/core'
);

/**
* This is a simple icon
* @example
* <jrg-icon icon="search"></jrg-icon>
*/
export class Icon extends Base {
    constructor() {
        super();
        this.template = template;
        this.addStyle(style);
    }
    static get observedAttributes() {
        return ['icon', 'base-color'];
    }
    get baseColor(){
        return this.getAttribute('base-color') || "lightsgrey";
    }
    get icon(){
        return this.getAttribute('icon') || 'home';
    }
}
Base.CREATE_ELEMENT('jrg-icon', Icon);
