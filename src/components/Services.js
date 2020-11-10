import React from 'react';

import { FaGithub, FaGgCircle, FaChalkboardTeacher } from "react-icons/fa";

const Services = () => {
    const [header] = React.useState({
        mainHeader: 'My Services',
        subHeader: '',
        mainContent: "Now that we know each other better, I'm going to tell you a secret. Nobody is going to come to a website for the design, they will come for the service and the content. A good design should make them stay, interact, and above all, offer them an easy to understand and enjoyable way to interact with their content. My job is to add my design experience to my clients' business trajectory and design a solution that meets their objectives. I love doing this. I want to help you like it too."
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <FaGithub className='commonIcons' />,
            heading: 'SOFTWARE DEVELOPMENT',
            textService: 'Development and production of applications.'
        },
        {
            id: 2,
            icon: <FaGgCircle className='commonIcons' />,
            heading: 'DESIGN',
            textService: 'Design and creation of modern and professional websites.'
        },
        {
            id: 3,
            icon: <FaChalkboardTeacher className='commonIcons' />,
            heading: 'ASESORIES',
            textService: 'I provide remote assistance or online collaborations'
        }
    ]);

    return (


        <div className='services' id="services">
            <div className='container'>
                <div className='row d-flex'>

                    <div className="col-12 mainHeaderServices">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>


                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='mainContentServices'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>

                            {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='services__box'>

                                            <div>{info.icon}</div>
                                            <div className='services__box-header'>{info.heading}</div>
                                            <div className='services__box-p'>{info.textService}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Services;