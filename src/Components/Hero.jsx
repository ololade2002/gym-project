import React from "react";
import Header from "./Header";
import heroimage from '../assets/hero_image.png';
import heroimgback from '../assets/hero_image_back.png';
import heart from '../assets/heart.png';
import calory from '../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
const transition = {type:'sprimg',duration:3};
const mobile = window.innerWidth <= 768 ? true : false

return ( 
    <div className="hero" id="Home">
     <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header></Header>
        {/* The best ad */}
         <div className="the-best-ad">
            <motion.div initial={{left: mobile ? '168px' : '238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition, type:'tween'}} >

            </motion.div>
            <span>The best fitness club in the town</span>
         </div>
         {/* Hero Heading */}
          <div className="hero-text"> 
           <div>
            <span className="stroke-text" >SHAPE </span>
           <span>YOUR</span></div>
           <div><span>IDEAL BODY</span></div>
          <div><span>In here we we will help you to shape and build your 
            ideal body and live up your life to the fullest </span></div>
          </div>
          {/*Figures */}
        <div className="figures">
            <div>
              <span>
              <NumberCounter end={140} start={100} delay={3} preFix='+' ></NumberCounter>
              </span>
            <span>expert coaches</span>
            </div>
            <div><span>
            <NumberCounter end={978} start={900} delay={3} preFix='+' ></NumberCounter>
            </span>
            <span>members joined</span></div>
            <div><span>
            <NumberCounter end={50} start={10} delay={3} preFix='+' ></NumberCounter>
            </span>
            <span>fitness programs</span></div>
        </div>
{/*Hero buttons */}
            <div className="hero-button">
              <button className="btn">Get started</button>
              <button className="btn">Learn More</button>
            </div>
            </div>
            
            
            <div className="right-h">
             <button className="btn">Join Now</button>
            <motion.div className="heart-rate" transiton={transition}
            whileInView={{right:'4rem'}}
            initial={{right:'2rem'}}>
                <img src={heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
             {/*Hero img */}
           <img src={heroimage} className='hero-img' alt="" />
           <motion.img initial={{right:'11rem'}}
           whileInView={{right:'20rem'}}
           transition={transition}
           src={heroimgback} className='hero-img-back' alt="" />
           {/*Calory img */}
           <motion.div className="calory"
           initial = {{right:'2rem'}}
           whileInView={{right:'4rem'}}
           transition={transition} >
           <img src={calory} alt="" />
           <div><span>Calories Burned </span>
           <span>220 kcal</span></div>
           </motion.div>

            </div>
        </div>
     );
}
 
export default Hero;