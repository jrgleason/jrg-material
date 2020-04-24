import template from './template.html';
import style from './style.scss';

// import font from '@jrg-material/theme/font.css';
// import effects from '@jrg-material/theme/effects.css';

if(!Base) console.error(
    'The base library was not found. Please run npm install --save @jrg-material/core'
);

export class Button extends Base {
  constructor() {
    super();
    this.template = template;
//     this.addStyle(font, 'font');
//     this.addStyle(effects, 'effects');
    this.addStyle(style);
  }

  static get observedAttributes() {
    return ['height', 'baseColor', 'contained', 'border'];
  }

  get outlined(){
    return !this.contained && this.border;
  }

  get border(){
    return this.getAttribute('border') === 'false'? false : true;
  }

  get contained(){
    return !!this.getAttribute('contained');
  }

  get height(){
    return this.getAttribute('height') || '36px';
  }
  connectedCallback() {
    super.connectedCallback();
    const elem = this.shadowRoot.firstChild;
    elem.style.height = this.height;
    if(this.outlined) elem.classList.add("outlined");
    if(this.contained) elem.classList.add("contained");
  }
}

Base.CREATE_ELEMENT('jrg-button', Button, {});
