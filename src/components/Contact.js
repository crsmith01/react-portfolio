import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Contact
                {/* find a way to make sure this is the Contact button in the nav bar */}
                {/* maybe with Nav.Link?? */}
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>You can reach me at the following:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* This is where the actual info goes */}
                    <p>
                        Email:
                        <a href='mailto:catsmith24601@gmail.com'> catsmith24601@gmail.com</a>
                        <br />
                        Phone:
                        <a href='tel:+18049297812'> (804) 929-7812</a>
                        <br />
                        {/* Might put these in Navbar separately/outside of modal, so holding off here for now */}
                        LinkedIn
                        GitHub
                        Resume
                    </p>
                    <p>
                        Or leave me a message!
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your preferred name here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="subject" placeholder="Enter subject here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="message" placeholder="Enter your message here" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact;