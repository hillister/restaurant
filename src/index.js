import "./styles.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Menu from "./components/Menu.js";

class Display {
    constructor(){
        this.content = document.getElementById("content");
        this.initialise();

    }

    initialise(){
        this.loadContent(Home);
        this.eventListeners();
    }
    eventListeners(){
        document.getElementById("home").addEventListener("click", () => {
            this.loadContent(Home);
        })
        document.getElementById("menu").addEventListener("click", () => {
            this.loadContent(Menu);
        })
        document.getElementById("about").addEventListener("click", () => {
            this.loadContent(About);
        })
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