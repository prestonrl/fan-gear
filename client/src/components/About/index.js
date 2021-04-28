import React from 'react';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import about3 from '../../assets/about3.jpg';
import about4 from '../../assets/about4.jpg';
import about5 from '../../assets/about5.jpg';
import about6 from '../../assets/about6.jpg';

function About() {

    return (
        
        <section className="my-5" >
            <h1 id="about" className="text-color Jones about-styling">About us:</h1>
            <h2 className="text-color Jones title-styling">"Hecho por fans, para fans"</h2>

            <div className="form-a">
                <p className="text-color Jones">
                We are Roberto (Architect) and Diego (Travel Agent), both fans of the Indiana Jones character. 
                We work and live in Argentina. We are not professional hatmakers, but a couple of friends which make this as a hobby, 
                just for the fun, and the knowledge we acquire through our own experience in the making. 
                </p>

                <img className="center-image-2" src={about1} alt=""></img>
            </div>

            <div className="form-a info-sections">
                <div className="about-paragraphs">
                    <p className="text-color Jones">
                    Our goal is to offer the best possible products at the most reasonable price, 
                    that should be high quality and also long lasting pieces of gear.
                    </p>

                    <p className="text-color Jones">
                    We started enjoying this hobby in 2006 through the ‘Comunidad Fan Española de Indiana Jones’ Forum, 
                    trying to make hats that look like those seen in the movies, but that should also be durable and offered at the lowest price 
                    possible. Since then, the “Explorador” fedora has been our best seller, which has been improved along time 
                    thanks to the help of many members of the Spanish Indy Forum, having hundreds of satisfied customers both in Europe and America.
                    </p>

                    <p className="text-color Jones">
                    Live the adventure of your life, with your <span>EXPLORADOR</span> fedora!
                    </p>
                </div>
                
                <img className="float-image center-image" src={about6} alt=""></img>
            </div>

            <div className=" flex-row center-image">
                <img className ="about-images" src={about3} alt=""></img>
                <img className ="about-images" src={about4} alt=""></img>
                <img className ="about-images" src={about2} alt=""></img>
                <img className ="about-images" src={about5} alt=""></img>
            </div>
        </section>
    )
}

export default About;