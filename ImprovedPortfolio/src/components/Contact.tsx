import React from "react";
import "../../public/styling/contact.css";

const Contact = () => {
	return (
		<>
			<div className="contactSection">
				<div className="contactContainer">
					<div className="contactLeft">
						<form className="contactForm">
							<h1 className="contactTitle">Contact Me</h1>
							<input type="text" className="contactInput" placeholder="Name" />
							<input type="text" className="contactInput" placeholder="Email" />
							<textarea
								className="contactTextArea"
								placeholder="Enquiry"
								rows={10}
							></textarea>
							<button className="contactButton">Send</button>
						</form>
					</div>
					<div className="contactRight"></div>
				</div>
			</div>
		</>
	);
};

export default Contact;
