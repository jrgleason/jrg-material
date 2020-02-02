import {Tab} from "../tab/index.mjs";
// Shouldn't import otherwise the dependency is brought in
// import {Icon} from "@jrg-material/icon";

export class IconTab extends Tab{
    constructor(name, icon){
        super(name);
        this.icon = icon;
    }
    static get observedAttributes() {
        const parent = Tab.observedAttributes;
        parent.push("icon");
        return parent;
    }
    //jrg-tab(slot="jrg-tabs-item" onclick="App.onNavigation(this)" name="tab1")
    render(){
        super.render();
        this.setAttribute("slot", "jrg-tabs-item");
        this.setAttribute("name", this.name);
        const iconElement = document.createElement("jrg-icon");
        iconElement.setAttribute("icon", this.icon);
        iconElement.setAttribute("slot","jrg-tab-content");
        this.innerHTML = '';
        this.appendChild(iconElement);
    }
    getAttributes(){
        super.getAttributes();
        this.icon = this.getAttribute("icon") || this.icon;
    }
}
Base.CREATE_ELEMENT('jrg-icon-tab', IconTab, {});