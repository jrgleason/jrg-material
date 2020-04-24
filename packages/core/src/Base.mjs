/**
 * Represents a base element
 */
export class Base extends HTMLElement {
  constructor(mode = 'open') {
    super();
    this.attachShadow({mode});
    this.styles = { };
    this.styleNames = [];

    this.styleElement = document.createElement('div');
    this.styleElement.className = 'jrg-styles';
  }

  get template(){
    const element = document.createElement('template');
    element.innerHTML = Mustache.render(this.html, this);
    return element.content.cloneNode(true);
  }

  set template(html){
    this.html = html;
  }

  addStyle(style, name="main"){
    this.styleNames.push(name);
    this.styles[name] = style;
  }

  renderStyle(name){
    const style = this.styles[name];
    const element = document.createElement('style');
    if(style == null){
        console.error(`Style was not found ${name}`);
        return;
    }
    element.textContent = Mustache.render(style, this);
    return element;
  }

  renderStyles() {
    this.styleElement.innerHTML = '';
    this.styleNames.forEach((name)=>{
      const element = this.renderStyle(name);
      this.styleElement.appendChild(element);
    });
  }

  /**
    * Create a base element.
    * @param {string} template - The html value.
    * @param {string} style - The css value.
    */
  render() {
    this.shadowRoot.innerHTML='';
    const styleElem = this.renderStyles();
    this.shadowRoot.appendChild(this.template);
    this.shadowRoot.appendChild(this.styleElement);
  }

  connectedCallback() {
    this.render();
  }

  static CREATE_ELEMENT(name, object, params) {
    customElements.get(name) ||
        customElements.define(name, object, params);
  }
}