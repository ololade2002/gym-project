import Logo from '../assets/logo.png';

import Bars from '../assets/bars.png';

const Header = () => {


    return ( 
        <div className="header">
          <img src={Logo} className='logo' alt="logo" />
          
            <input type="checkbox" id='check' />
              <label htmlFor="check" className='bar'>
              <img src={Bars} alt=""  style={{
            width:'1.8rem',height:'1.5rem' }} />
              </label>
             
           <ul className='header-menu'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Pro">Programs</a></li>
            <li><a href="#Why">Why Us</a></li>
            <li><a href="#Tes">Testimonials</a></li>
          
           </ul>
          
        </div>
     );
}
 
export default Header;