const toggleMenuElements = {
    toggle: document.querySelector(`.toggle`),
    siteNavigation: document.querySelector(`.site-navigation`),
    siteNavigationList: document.querySelector(`.site-navigation__list`),
    toggleLines: document.querySelectorAll(`.toggle__line`)
}

Textblock([{
     target: ".intro__title",
     minWidth: 344,
     maxWidth: 1180,
     minWidth_FontSize: 2.6,
     maxWidth_FontSize: 11,
     minWidth_LineHeight: 1.33,
     maxWidth_LineHeight: 1.25,
     minWidth_VariableGrade: 366,
     maxWidth_VariableGrade: 300,
     container: "self",
     fontSize_Units: "rem"
}]);

class MenuToggle{
    elements = null
    
    constructor(elements){
        this.toggle = elements.toggle
        this.siteNavigation = elements.siteNavigation
        this.siteNavigationList = elements.siteNavigationList
        this.toggleLines = elements.toggleLines
        this.setup()
    }

    setup() {
    
        this.clickHandler = (evt) => {
            if(!this.siteNavigation.classList.contains(`site-navigation_open`)){
                this.dimmer = document.createElement("div")
                this.dimmer.classList.add(`dimmer`)
                document.querySelector(`body`).appendChild(this.dimmer)
                document.querySelector(`body`).style.overflowX = `hidden`
                this.siteNavigation.classList.toggle(`site-navigation_open`)
                this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
                this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
                this.siteNavigationList.classList.toggle(`site-navigation__list_open`)
                setTimeout(() => { this.siteNavigation.style.width = `20.6rem` }, 10);
            }
            else{
                this.siteNavigation.style.width = `0`
                this.dimmer.remove()
                setTimeout(() => { 
                    this.siteNavigation.classList.toggle(`site-navigation_open`)
                    this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
                    this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
                    this.siteNavigationList.classList.toggle(`site-navigation__list_open`)
                    document.querySelector(`body`).style.overflowX = `visible`
                }, 200);                
            }
        }

        this.toggle.addEventListener(`click`, this.clickHandler)
    }
}

const toggleMenu = new MenuToggle(toggleMenuElements)

function fixHeader() {

    if(window.innerWidth >= 768){
        toggleMenuElements.siteNavigation.style.width = `100%`
    }
}

window.onresize = fixHeader;