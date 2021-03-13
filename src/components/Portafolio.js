import React from 'react';

import Bomberbot from '../../public/images/Card_Children.jpeg';
import AirBnB from '../../public/images/airbnb-logo.png';
import AppLinks from '../../public/images/appLinks.png';
import Shell from '../../public/images/shell2.png';
import Time from '../../public/images/appTimeWeather.png';
import HeadPhones from '../../public/images/appHeadphones.png';

const Portafolio = () => {

    const [header] = React.useState({
        mainHeader: 'My Projects',
        subHeader: '',
        mainContent: "Since my beginnings in this magical world of development I have created and participated in the following projects:"
    });

    const [state] = React.useState([
        {
            id: 1,
            imag: Bomberbot,
            heading: 'Bomberbot PARENTS',
            textService: "Allows parents to track and engage with their children's performance, understand what they are learning and how they are doing it, all in real time and from anywhere.",
            url: 'https://bomberbotparents.netlify.app/'
        },
        {
            id: 2,
            imag: AirBnB,
            heading: 'AirBnB CLONE',
            textService: 'Presents a console in which you can manipulate the data present in a json file,. It can also be deployed on any mobile device under ćaracterística response.',
            url: 'https://github.com/clasesucatmarlon/AirBnB_clone_v3'
        },
        {
            id: 3,
            imag: AppLinks,
            heading: 'Manage Links',
            textService: 'Application to manage links of interest, using Boostrap and Firebase as database management system.',
            url: 'https://api-english-reactjs.web.app/'
        },
    ]);

    const [state2] = React.useState([
        {
            id: 1,
            imag: Shell,
            heading: 'SINGLE SHELL',
            textService: 'Shell for Linux where you can run the binaries present in Linux, such as ls, cat, rm, etc. It is optimized, no memory leaks are possible. For this project I use C, as programming language.',
            url: 'https://github.com/AndresCallejasG/simple_shell'
        },
        {
            id: 2,
            imag: Time,
            heading: 'Weather',
            textService: 'Application to display the weather for Bogota and the forecast for the next three days, as well as for Lyon and Paris.  It consumed openWeather api using Javascrip, html, css and bootstrap..',
            url: 'http://timegradiweb1.herokuapp.com/'
        },
        {
            id: 3,
            imag: HeadPhones,
            heading: 'HEADPHONES',
            textService: 'The project was done without the use of libraries. Only HTML, CSS, and Responsive Design were used. The goal is to achieve a fully functional website that has the same look and feel as the selected design file.',
            url: 'https://clasesucatmarlon.github.io/projPortofolioHeadphones/'
        }
    ]);

    return (

        <div className='portafolio' id="projects">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>

                    <div className="col-12 ">
                        <div className='common'>
                            <p className='mainContentPortafolio'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='portafolio__box'>
                                            <div className='containerImg'>
                                                <img src={info.imag} className='commonImgPort' alt={info.heading}/>
                                            </div>
                                            <div className='portafolio__box-header'>{info.heading}</div>
                                            <div className='portafolio__box-p'>{info.textService}</div>
                                            <div className='seeMore'>
                                                <a href={info.url} target='_blank' className='portafolio__box-url'>
                                                    See page / Repository...
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='row'>
                            {state2.map(info => (
                            <div className='colu-4'>
                                <div className='portafolio__box'>
                                    <div className='containerImg'>
                                        <img src={info.imag} className='commonImgPort' alt={info.heading} />
                                    </div>
                                    <div className='portafolio__box-header'>{info.heading}</div>
                                    <div className='portafolio__box-p'>{info.textService}</div>
                                    <div className='seeMore'>
                                        <a href={info.url} target='_blank' className='portafolio__box-url'>
                                            See page / Repository...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                            
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portafolio;