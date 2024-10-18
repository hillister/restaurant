import tacos from "../assets/tacos.jpg"
class Menu {
    render (){
        const section = document.createElement('section');
        section.id = 'menuPage'
        const textMenu = document.createElement('p')
        textMenu.id = "textMenu"
        textMenu.innerHTML = `
            <h4>Menu</h4>
            <h6>Taco al Pastor</h6>
            <p id="p">Marinated pork with grilled pineapple, topped with onions and fresh cilantro.</p>

            <h6>Taco de Pollo</h6>
            <p id="p">Grilled or shredded chicken served with avocado, sour cream, lettuce, and cheese.</p>

            <h6>Taco de Pescado</h6>
            <p id="p">Grilled or fried fish served with cabbage slaw, avocado, and chipotle mayo.</p>

            <h6>Taco Veggie</h6>
            <p id="p">A hearty mix of grilled seasonal vegetables and black beans, topped with fresh cilantro.</p>
        `
        const img = document.createElement('img');
        img.id = 'tacos'
        img.src = tacos
        section.appendChild(img)
        section.appendChild(textMenu)
        return section
    }
    
};


export default Menu