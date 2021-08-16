import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav.Link onClick={handleShow}>
                Contact
            </Nav.Link>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>You can reach me at the following:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        Email:
                        <a href='mailto:catsmith24601@gmail.com'> catsmith24601@gmail.com</a>
                        <br />
                        Phone:
                        <a href='tel:+18049297812'> (804) 929-7812</a>
                        <br />

                        {/* Change these two to be consistent with email and phone number */}
                        <Nav.Link
                            href='https://github.com/crsmith01'
                            target='_blank'
                            className='links'
                            // react tooltip - need to change to data-tip from data-placement
                            // data-toggle="tooltip"
                            title="GitHub Profile"
                            data-placement="bottom"
                            rel='noreferrer noopener'>
                            <span className='icon'>GitHub
                                {/* <i className='fab fa-github'></i> */}
                            </span>
                        </Nav.Link>

                        <Nav.Link
                            href='https://www.linkedin.com/in/catherine-smith24601'
                            target='_blank'
                            className='links'
                            // data-toggle="tooltip"
                            // title="LinkedIn Profile"
                            // data-placement="bottom"
                            rel='noreferrer noopener'>
                            <span className='icon'>LinkedIn
                                {/* <i className='fa fa-3x fa-linkedin-square'></i> */}
                                {/* <i className='fab fa-linkedin'></i> */}
                            </span>
                        </Nav.Link>
                    </p>
                    <p>
                        Or leave me a message!
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="name" placeholder="Enter your preferred name here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSubject">
                            <Form.Label>Subject:</Form.Label>
                            <Form.Control type="subject" placeholder="Enter subject here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message:</Form.Label>
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