import {Tab} from "../tab/index.mjs";

/**
* This is a Text Tab
*/
export class TextTab extends Tab{
    constructor(name, text){
        super(name);
        this.text = text;
    }
    static get observedAttributes() {
        const parent = Tab.observedAttributes;
        parent.push("text");
        return parent;
    }
    //jrg-tab(slot="jrg-tabs-item" onclick="App.onNavigation(this)" name="tab1")
    render(){
        super.render();
        this.setAttribute("slot", "jrg-tabs-item");
        this.setAttribute("name", this.name);
        const textElement = document.createElement("div");
        textElement.setAttribute("slot","jrg-tab-content");
        textElement.innerHTML = this.text;
        this.innerHTML = '';
        this.appendChild(textElement);
    }
    getAttributes(){
        super.getAttributes();
        this.text = this.getAttribute("text") || this.text;
    }
}
Base.CREATE_ELEMENT('jrg-text-tab', TextTab, {});