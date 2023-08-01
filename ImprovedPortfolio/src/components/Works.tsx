import React from "react";
import "../../public/styling/works.css";

const data = [
	"Web Design",
	"Development",
	"Illustration",
	"Product Design",
	"Social Media",
];

const Works = () => {
	return (
		<>
			<div className="worksSection">
				<div className="worksContainer">
					<div className="worksLeft">
						<ul className="worksUl">
							{data.map((item) => (
								<li className="worksListItems" key={item}>
									{item}
									<span className="afterItem">{item}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="worksRight"></div>
				</div>
			</div>
		</>
	);
};

export default Works;
