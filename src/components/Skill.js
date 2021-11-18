import React, {useState} from 'react';
import Data from '../data/Data';

const Skill = () => {
    const [stateSkill] = useState(Data.skills)

    return (
        <div className='skill' id="skill">
            <div className='container'>
                <div className='row d-flex'>


                    <div className="col-12 mainHeaderSkill">
                        <div className='commonBorder'></div>
                        <h1>My Skills</h1>
                        <div className='commonBorder'></div>
                    </div>

                    <div className="col-12 ">
                        <div className='skillBanner'>

                            {
                                stateSkill.map((skill, index) => (
                                    <img key={index} src={skill.url} alt={skill.name}/>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill