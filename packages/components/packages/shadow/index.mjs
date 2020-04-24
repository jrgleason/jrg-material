class ShadowElement extends HTMLElement {
  constructor(mode = 'open') {
    super();
    this.mode = mode;
    this.attachShadow({mode});
  }
}
export {ShadowElement};
