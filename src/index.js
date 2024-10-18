import "./styles.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Menu from "./components/Menu.js";
import "./components/home.css";

class Display {
    constructor(){
        this.content = document.getElementById("content");
        this.homeBtn = document.getElementById("home");
        this.menuBtn = document.getElementById("menu");
        this.aboutBtn = document.getElementById("about");
        this.buttons = [this.homeBtn, this.aboutBtn, this.menuBtn]
        this.initialise();
    }

    initialise(){
        this.loadContent(Home);
        this.eventListeners();
    }
    eventListeners(){
        this.homeBtn.addEventListener("click", () => {
            this.loadContent(Home);
            this.resetBtn()
            this.styleButtons(this.homeBtn);
        })
        this.menuBtn.addEventListener("click", () => {
            this.loadContent(Menu);
            this.resetBtn()
            this.styleButtons(this.menuBtn)
        })
        this.aboutBtn.addEventListener("click", () => {
            this.loadContent(About);
            this.resetBtn()
            this.styleButtons(this.aboutBtn)
        })
    }

    resetBtn(){
        this.buttons.forEach(btn => {
            btn.style.color = "#e04646"
            btn.style.backgroundColor = "#dbcb81";
        })
    }

    styleButtons(button){
        button.style.color = "#e7ca45";
        button.style.backgroundColor = "#ffffff";
    }

    loadContent(Page){
        this.content.innerHTML = "";
        const newPage = new Page();
        this.content.appendChild(newPage.render());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Display();
});