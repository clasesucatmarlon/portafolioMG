import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithubAlt, FaPlay } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerSection'>
                    <div className='footerSection-logo'></div>
                    <div className='row informationFootfer justifyContent'>
                        <div>
                            COPYRIGHT © Marlon García Portfolio 2021. All rights reserved.
                        </div>
                        <div className='aboutCircles'>
                            <ul className='footer__ul'>
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer