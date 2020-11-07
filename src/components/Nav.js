import React from 'react';

import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
    const [state, setState] = React.useState(true)

    return (
        <nav>
            <div className='container-fluid navbar'>
                <div className='row'>
                    <div className='col-12'>
                        {state ? <ul className='navbar__right'>
                            <li><a href='#banner'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#services'>Services</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#skill'>Skills</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul> : ''}
                    </div>
                    <div className='toogle' onClick={() => setState(!state)}>
                        <FaAlignJustify />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav;