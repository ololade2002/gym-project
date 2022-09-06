import {plansData} from '../data/plansData';
import whitetick from '../assets/whiteTick.png'

const Plans = () => {

    return ( 
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="program-header">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            {/*plan cards */}
            <div className="plans">
             {plansData.map((plan)=> (
               <div className="plan-preview" key={plan.id}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature)=> (
                        <div className="feature" >
                            <img src={whitetick} alt="" />
                            <span key={plan.id} value={plan} >{feature}</span>
                        </div>
                    ))}
                    </div> 

                <div><span>See more benefits</span></div>
                <button className="btn">Join now</button>

               </div> 
             ))}
            </div>

        </div>
     );
}
 
export default Plans;