import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const handleSubmit = (event) => {
	event.preventDefault();
	event.stopPropagation();
	console.log(event);
};

const ContactForm = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formName">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Your Name" />
				{/* 				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text> */}
			</Form.Group>

			<Form.Group className="mb-3" controlId="formEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Your Email" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formPhone">
				<Form.Label>Phone Number (Optional)</Form.Label>
				<Form.Control type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formMessage">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={5} placeholder="Write Message Here" />
			</Form.Group>
			<Button variant="outline-dark" type="submit">
				Send
			</Button>
		</Form>
	);
};

export default ContactForm;
