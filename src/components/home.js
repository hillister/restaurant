class Home {
    render (){
        const section = document.createElement('section');
        section.id = 'home'
        section.src = "./assets/tequila.jpg"
        section.innerHTML = "Welcome to Casa de Sazón! At Casa de Sazón, we celebrate the vibrant and diverse flavors of Mexico right in the heart of your neighborhood. Our mission is to bring you authentic Mexican cuisine made with love, passion, and the freshest ingredients. From sizzling fajitas to homemade tamales, every dish is crafted to transport you straight to the sun-kissed streets of Mexico. Whether you're enjoying a casual dinner with family, a festive gathering with friends, or a romantic evening, our warm atmosphere and dedicated staff will make every visit memorable. Join us for an unforgettable culinary experience where every bite is a taste of tradition and love!"
     
        return section
    }
    
};

export default Home