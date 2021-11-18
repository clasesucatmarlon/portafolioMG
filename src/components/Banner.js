import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import Data from "../data/Data";

const Banner = () => {
	const [state] = React.useState(Data);

	return (
		<div>
			<div className="container-fluid header" id="banner">
				<div className="row">
					<div className="col-12">
						<div className="header__section">
							<ul className="header__ul">
								<a
									href="https://www.linkedin.com/in/marlonagarciam/"
									target="_blank"
								>
									<li>
										<FaLinkedinIn />
									</li>
								</a>
								<a href="https://twitter.com/garciamarlon" target="_blank">
									<li>
										<FaTwitter />
									</li>
								</a>
								<a href="https://github.com/clasesucatmarlon" target="_blank">
									<li>
										<FaGithubAlt />
									</li>
								</a>
							</ul>
							<h1>{state.title}</h1>
							<p className="text__title">{state.text}</p>
							<p className="text__skill">{state.skill}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
