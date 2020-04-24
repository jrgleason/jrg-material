import templateFn from './index.template.pug';
import style from './index.style.scss';

class TodoForm extends ShadowElement {
  constructor(text) {
    super();
    this.textValue = text;
    this.onStateChange = stateChange;
  }
  postTodo(todo) {
    return new Promise((res, rej)=>{
      const xhttp = new XMLHttpRequest();
      xhttp.open('POST', '/todo', true);
      xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhttp.onreadystatechange = ()=>{
        this.onStateChange(xhttp, res, rej);
      };
      xhttp.send(JSON.stringify(todo));
    });
  }
  async onClick() {
    await this.postTodo({
      todo: this.todo.value,
    });
    this.todo.value = null;
    // TODO remove focus
    // document.activeElement.blur()
    // TODO: Update state engine so that it is set to rerender
  }

  get text() {
    if (this.textValue) return this.textValue;
    else return this.getAttribute('text');
  }

  get name() {
    if (this.nameValue) return this.nameValue;
    else return this.getAttribute('name') || 'Submit';
  }

  connectedCallback() {
    // this.refreshAttributes();
    this.shadowRoot.innerHTML = templateFn(this);
    console.log(`InnerHTML is ${this.shadowRoot.innerHTML}`);
    this.shadowRoot.append(this.renderStyle());
    this.submit = this.shadowRoot.querySelector('#submit-button');
    this.todo = this.shadowRoot.querySelector('#form-desc');
    this.todo.value = this.text;
    this.submit.onclick = this.onClick.bind(this);
  }
  renderStyle() {
    const element = document.createElement('style');
    element.textContent = style;
    return element;
  }
}

export {TodoForm};

CREATE_ELEMENT('jrg-todo-form', TodoForm);
