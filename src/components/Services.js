import React from "react";

import { FaGithub, FaGgCircle, FaChalkboardTeacher } from "react-icons/fa";
import Data from "../data/Data";

Data;
const Services = () => {
    const [headerService] = React.useState(Data);

    const [stateServices] = React.useState(Data.services.listServices);

    return (
        <div className="services" id="services">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 mainHeaderServices">
                        <div className="commonBorder"></div>
                        <h1>{headerService.services.mainHeaderServices}</h1>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="col-12 centerContent">
                        <div className="common">
                            <p className="mainContentServices">
                                {headerService.services.mainContentServices}
                            </p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                {stateServices.map((info, index) => (
                                    <div key={index} className="colu-4">
                                        <div className="services__box">
                                            <div>{info.icon}</div>
                                            <div className="services__box-header">{info.heading}</div>
                                            <div className="services__box-p">{info.textService}</div>
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
};

export default Services;
