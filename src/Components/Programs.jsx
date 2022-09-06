import { programsData } from "../data/programsData";
import rarrow from '../assets/rightArrow.png'

const Programs = () => {

    return ( 
        <div className="program" id="Pro">
        {/* Header */}
        <div className="program-header">
            <span className="stroke-text" >Explore our</span>
            <span>Programs</span>
            <span className="stroke-text"  >to shape you</span>
        </div>
        <div className="program-categories">
        {programsData.map((program)=> (
            <div className="category" key={program.id}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span><img src={rarrow} alt="" /></div>
            </div>
        ))}
        </div>

        </div>
     );
}
 
export default Programs;