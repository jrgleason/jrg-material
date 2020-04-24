import templateFn from './index.template.pug';
import style from './index.style.scss';

class Viewport extends ShadowElement {
  get state() {
    if (window.stateEngine) return window.stateEngine;
    else if (this.localState) return this.localState;
    else {
      console.log('Creating a local state');
      this.localState = {};
      return this.localState;
    }
  }
  getTodos() {
    return new Promise((res, rej)=>{
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', '/todo', true);
      xhttp.onreadystatechange = ()=>{
        this.onStateChange(xhttp, res, rej);
      };
      xhttp.send();
    });
  }
  renderStyle() {
    const element = document.createElement('style');
    element.textContent = style;
    return element;
  }
  refreshAttributes() {
    this.name = this.getAttribute('name') || 'No Name Found';
    this.value = this.getAttribute('value');
  }
  async onClick() {
    await this.postTodo({
      todo: this.todo.value,
    });
    this.todo.value = '';
  }
  connectedCallback() {
    this.refreshAttributes();
    this.shadowRoot.innerHTML = templateFn(this);
    this.shadowRoot.append(this.renderStyle());
    //     this.submit = this.shadowRoot.querySelector('#submit-button');
    //     this.todo = this.shadowRoot.querySelector('#form-desc');
    //     this.todo.value = this.text;
    //     this.submit.onclick = this.onClick.bind(this);
  }
}

export {Viewport};

CREATE_ELEMENT('jrg-viewport', Viewport);
