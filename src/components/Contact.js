import React from 'react'
import Data from '../data/Data';

const Contact = () => {
    const [headerContact] = React.useState(Data);

    const [stateContact] = React.useState(Data.contact)

    return (
        <div className='contact' id="contact">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeaderContact">
                        <div className='commonBorder'></div>
                        <h1>{headerContact.mainHeaderContact}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='about__info-p1'>{headerContact.p1Contact}</p>
                            <p className='about__info-p2'>{headerContact.p2Contact}</p>
                        </div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common info_contacts '>
                            {stateContact.map((info, index) => (
                                <div key={index}>
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