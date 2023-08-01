import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../public/styling/contact.css";
import Map from "./Map";

const Contact = () => {
	const ref = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (ref.current) {
			emailjs
				.sendForm(
					"service_4pasqyi",
					"template_k7bv08d",
					ref.current,
					"AU1p_xj5N1oAy9WJO"
				)
				.then(
					(result) => {
						console.log(result.text);
						setSuccess(true);
					},
					(error) => {
						console.log(error.text);
						setSuccess(false);
					}
				);
		}
	};

	return (
		<>
			<div className="contactSection">
				<div className="contactContainer">
					<div className="contactLeft">
						<form ref={ref} className="contactForm" onSubmit={handleSubmit}>
							<h1 className="contactTitle">Contact Me</h1>
							<input
								type="text"
								className="contactInput"
								placeholder="Name"
								name="name"
							/>
							<input
								type="text"
								className="contactInput"
								placeholder="Email"
								name="email"
							/>
							<textarea
								className="contactTextArea"
								placeholder="Enquiry"
								name="message"
								rows={10}
							></textarea>
							<button className="contactButton" type="submit">
								Send
							</button>
							{success &&
								"Your message has been sent. I will get back to you soon"}
						</form>
					</div>
					<div className="contactRight">
						<Map />
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
