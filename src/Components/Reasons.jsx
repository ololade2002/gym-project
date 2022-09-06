import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import nike from '../assets/nike.png';
import addide from '../assets/adidas.png';
import tick from '../assets/tick.png';
import nb from '../assets/nb.png';

const Reasons = () => {

    return ( 
        <div className="reason" id="Why">

          <div className="left-side">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>

          <div className="right-side">
            <span>Some reasons to choose us</span>
            <div>
                <span className='stroke-text'>Why </span>
                <span>choose us</span>
            </div>

            <div className='details-r'>
            <div><img src={tick} alt="" /><span>over 140+ expert coaches</span></div>
            <div><img src={tick} alt="" /><span>train smarter and faster than before</span></div>
            <div><img src={tick} alt="" /><span>1 free program for a new member</span></div>
            <div><img src={tick} alt="" /><span>reliable partners</span></div>
            </div>

            <span style={{
               color:'var(--gray)',
               fontWeight:'normal' ,}}>our partners</span>

               <div className="partner">
                <img src={nb} alt="" />
                <img src={addide} alt="" />
                <img src={nike} alt="" />
               </div>
        
          </div>
        </div>
     );
}
 
export default Reasons;