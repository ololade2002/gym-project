import github from '../assets/github.png';
import ig from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import logo from '../assets/logo.png';

const Footer = () => {

    return ( 
        <div className="footer-container">
          <hr />
          <div className="footer">
            <div className="social-link">
            <img src={github} alt="" />
            <img src={ig} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <div className="logo-f">
            <img src={logo} alt="" />
          </div>
          </div>

          <div className="blur f-blur-1"></div>
          <div className="blur f-blur-2"></div>         
        </div>
     );
}
 
export default Footer;