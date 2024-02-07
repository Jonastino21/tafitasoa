import "./navbar.css";
const Navbar = ({ openModal }) => {
    
    return ( 
        <header className="header">
            <a href="logo" className="logo">Miz'<span className="span">A</span>rt <span>Tech</span></a>
           <i className="fa-solid fa-bars" id="menu-icon" ></i>
        <nav className="navbar">
            <li><a href="#Apropos">About Me</a></li>
            <li><a href="#CarteVisite" onClick={openModal} >Generate a business card</a></li>
            <li><a href="#Contact">Contact Me</a></li>
            <li><a href="https://jonastino21.github.io/Jonastino_cv/">My CV</a></li> 
        </nav>
        </header>
    ) 
}
 
export default Navbar;
