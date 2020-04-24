import templateFn from './index.template.pug';
import style from './index.style.scss';

class TodoItem extends ShadowElement {
  connectedCallback() {
    // this.refreshAttributes();
    this.shadowRoot.innerHTML = templateFn(this);
    this.shadowRoot.append(this.renderStyle());
  }
  renderStyle() {
    const element = document.createElement('style');
    element.textContent = style;
    return element;
  }
}

export {TodoItem};

CREATE_ELEMENT('jrg-todo-item', TodoItem);
