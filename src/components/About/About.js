import '../Navbar/navbar';
import monImages from '../../../src/images/tsik.png';
import "./About.css";
const About = () => {
    return ( 
       <section className="apropos" id="Apropos">
            <div className="apropos-img">
                <img src={monImages} alt=""></img>
            </div>
            <div className="about-content">
                <h2 className="heading">Who am <span>I ?</span></h2>
                <p>My name is HERINIANTSONIAVO Tafitasoa Tsiky Jonstino. 
                   I am deeply passionate about the creative process and firmly believe in its transformative 
                   ability to manifest ideas into reality. As a versatile multidisciplinary artist,my focus lies in the realms of web and mobile development. 
                   Collaborating with discerning clients and fellow artists has been a privilege,
                   enriching my experiences and expanding my skill set.

                   Each new collaborative venture presents me with the invaluable opportunity to continually learn and 
                   evolve as an artist. I extend an invitation to explore my artistic portfolio, showcasing how my creations 
                   can impart a unique and distinctive essence to your projects.
        
                   Should you be considering potential collaborations or have any other inquiries, please feel free to contact me.
                   I extend my gratitude for your visit and eagerly anticipate the possibility of future engagements. 
                   <br/>
                   Thank you and see you soon!</p>
            </div>
       </section>
    ) 
}
 
export default About;