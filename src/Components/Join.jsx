import { useRef } from "react";
import emailjs from 'emailjs-com'

const Join = () => {
const form = useRef()

const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm('service_0oiso62', 'template_oshhr2c' , form.current,
        'xf42fBPmvSDYYDpGW'  )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return ( 
        <div className="join" id="join">


<div className="join-l">
    <hr className="hr" />
    <div>
        <span className="stroke-text">READY TO</span>
        <span> LEVEL UP</span>
    </div>
    <div>
        <span>YOUR BODY</span>
        <span className="stroke-text">WITH US ?</span>
    </div>
</div>

<div className="join-r">
    <form ref={form} className="email-box" onSubmit={sendEmail} >
        <input type="email" name="user_email" placeholder=" Email Address " />
        <button className="btn-join">Join Now</button>
    </form>
</div>

        </div>
     );
}
 
export default Join;