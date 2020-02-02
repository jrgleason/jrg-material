import {TextTab, IconTab} from "/jrg/tabs/dist/index.mjs";

const Tabs = [
    {
        name: "tab1",
        icon: "build"
    }, {
        name: "tab2",
        icon: "info"
    }, {
        name: "tab3",
        icon: "motorcycle"
    }
]

const States = { }

const changeSelected = XStateFSM.assign({
  selected: (context, event) => event.value
});

Tabs.forEach((tab)=>{
    States[tab.name] = {
        on:{
            CHANGE: {
                actions: [changeSelected]
            }
        }
    }
})

const createToggle = function(){
    return XStateFSM.createMachine({
        id: 'navigation',
        context:{
            selected: Tabs[0].name
        },
        initial: Tabs[0].name,
        states: States
    });
}

class DemoApplication{
    constructor(){
        this.machine = createToggle();
        this.currentState = this.machine.initialState;
        this.tabElement = document.getElementById("jrg-navigation-tabs");
        this.renderTabs(this.currentState.value);
    }
    renderTabs(name){
        this.tabElement.innerHTML = "";
        Tabs.forEach((tab)=>{
            const element = new TextTab(tab.name, tab.name);
            element.setAttribute("onclick", "App.onNavigation(this)");
            if(name === element.name){
                element.setAttribute("selected", "true");
            }
            this.tabElement.appendChild(element);
        })
        Tabs.forEach((tab)=>{
            const element = new IconTab(tab.name, tab.icon);
            element.setAttribute("onclick", "App.onNavigation(this)");
            if(name === element.name){
                element.setAttribute("selected", "true");
            }
            this.tabElement.appendChild(element);
        })
        this.tabElement.render();
    }
    onNavigation(element){
        const name = element.getAttribute("name");
        this.currentState = this.machine.transition(name, "CHANGE");
        this.renderTabs(this.currentState.value);
    }
}

window.App = new DemoApplication();

