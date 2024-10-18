import imagewomanImg from "../assets/woman.jpg"
class About {
    render (){
        const section = document.createElement('section');
        section.id = 'aboutPage';
        const imageWoman = document.createElement('img');
        imageWoman.id = 'woman'
        imageWoman.src = imagewomanImg;
        const aboutText = document.createElement('p')
        aboutText.id = 'aboutText'
        aboutText.innerHTML =`
            <h2 id='headerB'>About us</h2>
            <h5 id='headS'>Address:</h5>
            <p id='aboutP'>Casa de Sazón
            123 Fiesta Lane
            Taco Town, TX 78901
            USA</p>
            <h5 id='headS'>Phone:<h5>
            <p id='aboutP'>(555) 123-4567</p>
            <h5 id='headS'>Email:</h5>
            <p id='aboutP'>info@casadesazon.com</p>
        `
        section.appendChild(imageWoman)
        section.appendChild(aboutText)
        return section
    }
    
};


export default About 