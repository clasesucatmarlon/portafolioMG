import React from 'react'

import Foto from '../../public/images/fotomarlon.png';

const Contact = () => {
    const [header] = React.useState({
        subHeader: 'Contact me',
        p1: 'You are not hiring a professional full stack developer you are hiring a mind that has been trained to solve problems in a very agile and effective way.',
        p2: 'Being a professional full stack developer is not an easy task, it involves handling every aspect of creating and maintaining an application. For that reason, I like to solve different problems that your company has, give agile and effective solutions, which implies delivering attractive stories, with designs adapted to the current market and above all, fulfill your expectations!.'
    });

    const [state] = React.useState([

        { id: 2, title: 'email', text: 'clasesucatmarlon@gmail.com' },
        { id: 3, title: 'phone', text: '(+57) 3123315117' },

    ])

    return (
        <div className='contact' id="contact">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeaderContact">
                        <div className='commonBorder'></div>
                        <h1>{header.subHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='about__info-p1'>{header.p1}</p>
                            <p className='about__info-p2'>{header.p2}</p>
                        </div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common info_contacts '>
                            {state.map(info => (
                                <div>
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact