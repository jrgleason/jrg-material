import template from './template.html';
import style from './style.css';

export class Icon extends Base {
    constructor(icon) {
        super();
        this.template = template;
        this.default = icon || 'home';
        this.addStyle(style);
    }

    static get observedAttributes() {
        return ['icon'];
    }

    attributeChangedCallback(){
        console.log('Attribute callback test. in icon');
        super.render();
    }

    get icon(){
        return this.getAttribute('icon') || this.default;
    }

    connectedCallback() {
        this.baseColor = this.getAttribute('base-color') || "lightsgrey";
        super.connectedCallback();
    }
}
customElements.get('jrg-icon') ||
  customElements.define('jrg-icon', Icon, {});
