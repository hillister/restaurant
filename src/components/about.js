class About {
    render (){
        const section = document.createElement('section');
        section.id = 'about';
        section.innerHTML =`
            <h2>About us</h2>
            <h5>Address:</h5>
            <p>Casa de Sazón
            123 Fiesta Lane
            Taco Town, TX 78901
            USA</p>
            <h5>Phone<h5>
            <p>(555) 123-4567</p>
            <h5>Email</h5>
            <p>info@casadesazon.com</p>
        `
        return section
    }
    
};


export default About