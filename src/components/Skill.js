import React from 'react';

import Python from '../../public/images/python1.png';
import C from '../../public/images/c.png';
import Js from '../../public/images/js.png';
import Html from '../../public/images/html1.png';
import Css from '../../public/images/css.png';
import Bootstrap from '../../public/images/Bootstrap.png';
import MySQL from '../../public/images/mysql.png';
import Flask from '../../public/images/flask.png';
import ReactJS from '../../public/images/reactjs.png';
import API from '../../public/images/api.png';

const Skill = () => {



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
                            <img src={Python} />
                            <img src={C} />
                            <img src={Js} />
                            <img src={Html} />
                            <img src={Css} />
                            <img src={Bootstrap} />
                            <img src={MySQL} />
                            <img src={Flask} />
                            <img src={ReactJS} />
                            <img src={API} />
                        </div>
                    </div>
                </div>

                {/* <div className='portafolio__header'>
                    <div className='common'>
                        <h3 className='heading'>My Skills</h3>
                        <div className='commonBorder'></div>
                    </div>

                    <div className='skillBanner'>
                        <img src={Python} />
                        <img src={C} />
                        <img src={Js} />
                        <img src={Html} />
                        <img src={Css} />
                        <img src={Bootstrap} />
                        <img src={MySQL} />
                        <img src={Flask} />
                        <img src={ReactJS} />
                        <img src={API} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Skill