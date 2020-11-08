import React from 'react'

import Foto from '../../public/images/fotomarlon.png';

const About = () => {
    const [header] = React.useState({
        subHeader: 'About me',
        mainContent: 'Currently in the stage of elaboration of a Degree Work in the Master of Virtual Teaching.  Bachelor of Education with a major in Computer Science and Mathematics, with more than 20 years of experience in the educational system as a university teacher in the area of Technology and Mathematic.  Loves software development and web design, and is able to form or belong to work teams, to hear and respect the opinions of others, and share knowledge.'
    });

    const [state] = React.useState([
        { id: 1, title: 'Name', text: 'Marlon García' },
        { id: 2, title: 'email', text: 'clasesucatmarlon@gmail.com' },
        { id: 3, title: 'phone', text: '(+57)-3123315117' },
        { id: 4, title: 'linkedin', text: 'https://www.linkedin.com/in/marlonagarciam/' }
    ])

    return (

        <div className='about' id="about">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.subHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 col-lg-4 centerContent">
                        <img className='imgAbout' src={Foto} alt='Picture marlon' />
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className='common'>
                            <p className='mainContent'>{header.mainContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About