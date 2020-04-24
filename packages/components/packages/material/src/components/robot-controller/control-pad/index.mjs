import templateFn from './index.template.pug';
import style from './index.style.scss';

class ControlPad extends ShadowElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // this.refreshAttributes();
    this.shadowRoot.innerHTML = templateFn(this);
    this.shadowRoot.append(this.renderStyle());
    if (window.ctrl.onUp) {
      this.onUp = window.ctrl.onUp;
    }
    if (window.ctrl.onDown) {
      this.onDown = window.ctrl.onDown;
    }
    if (window.ctrl.onLeft) {
      this.onLeft = window.ctrl.onLeft;
    }
    if (window.ctrl.onRight) {
      this.onRight = window.ctrl.onRight;
    }
    if (this.onUp) {
      this.up = this.shadowRoot.querySelector('#up');
      this.up.onclick = this.onUp.bind(this);
    }
    if (this.onDown) {
      this.down = this.shadowRoot.querySelector('#down');
      this.down.onclick = this.onDown.bind(this);
    }
    if (this.onLeft) {
      this.left = this.shadowRoot.querySelector('#left');
      this.left.onclick = this.onLeft.bind(this);
    }
    if (this.onRight) {
      this.right = this.shadowRoot.querySelector('#right');
      this.right.onclick = this.onRight.bind(this);
    }
  }
  renderStyle() {
    const element = document.createElement('style');
    element.textContent = style;
    return element;
  }
}

export {ControlPad};

CREATE_ELEMENT('jrg-control-pad', ControlPad);
