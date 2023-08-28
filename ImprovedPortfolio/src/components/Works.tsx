import React, { useState } from "react";
import "../../public/styling/works.css";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

const data = [
	"Web Design",
	"Development",
	"Illustration",
	"Product Design",
	"Social Media",
];

const Works = () => {
	const [work, setWork] = useState("Web Design");
	return (
		<>
			<div className="worksSection">
				<div className="worksContainer">
					<div className="worksLeft">
						<ul className="worksUl">
							{data.map((item) => (
								<li
									className="worksListItems"
									key={item}
									onClick={() => setWork(item)}
								>
									{item}
									<span className="afterItem">{item}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="worksRight">
						{work === "Web Design" ? (
							<WebDesign />
						) : work === "Development" ? (
							<Development />
						) : (
							<ProductDesign />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Works;
