import { Button } from 'reactstrap';
import '../Navbar/navbar';
import "./contact.css";
const Contact = () => {




    return ( 
      <section className="contact" id="Contact">
        
        <h2 className="heading">Contact <span>Me</span></h2>
        <h4><i className='fa-solid fa-phone'> Phone : </i><span>+261334001828</span></h4>
            <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100088673478688"><i className='fa-brands fa-facebook' ></i></a>
                <a href="https://github.com/Jonastino21"><i className='fa-brands fa-github'></i></a>
                <a href="https://www.linkedin.com/in/jonastino-heriniantsoniavo-531945213?original_referer="><i className='fa-brands fa-linkedin' ></i></a>
                <a href="https://www.instagram.com/jonastino21/"><i className='fa-brands fa-instagram' ></i></a>
            
            </div>
            <div className='bouton'>
            <Button color='primary' tag="a" href='mailto:heryniantso@gmail.com'>Contact me by email</Button>
            </div>
    </section>
    ) 
}

export default Contact;