import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';


const Banner = () => {
    const [state] = React.useState({
        title: 'Hey!, I am Marlon García',
        text: "Professional full stack developer",
        image: 'https://user-images.githubusercontent.com/60376045/98049840-7d899780-1dfe-11eb-9384-81c6fa5e7465.png'
    });
    return (
        <div>
            {/* <header className='header'> */}
            <div className='container-fluid header' id="banner">
                <div className='row'>
                    <div className='col-12'>
                        <div className='header__section'>
                            <ul className='header__ul'>
                                <a href="https://www.linkedin.com/in/marlonagarciam/" target='_blank'>
                                    <li><FaLinkedinIn /></li>
                                </a>
                                <a href="https://twitter.com/garciamarlon" target='_blank'>
                                    <li><FaTwitter /></li>
                                </a>
                                <a href="https://github.com/clasesucatmarlon" target='_blank'>
                                    <li><FaGithubAlt /></li>
                                </a>
                            </ul>
                            <h1>{state.title}</h1>
                            <p>{state.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </header> */}

        </div>
    )
}

export default Banner;