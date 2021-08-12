import React from 'react';
// import Contact from './components/Contact';

import Contact from '../Contact';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { LinkContainer } from 'react-router-bootstrap';
// // import ReactTooltip from 'react-tooltip';


// import Tooltip from 'react-bootstrap/Tooltip';
// import Overlay from 'react-bootstrap/Overlay';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Container from 'react-bootstrap/Container';



export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* either eliminate .Brand or add CRS logo here instead */}
                <Navbar.Brand href="#home">
                    <Image src='/images/images-tinified/CRS-Logo.png' alt='CRS Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Links for Home, Portfolio, Contact, Resume, and Relevant Socials */}
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>

                        <Nav.Link href="#portfolio">
                            Portfolio
                        </Nav.Link>

                        <Contact />

                        <Nav.Link
                            className='link'
                            href="https://docs.google.com/document/d/e/2PACX-1vTOmmrXw5f6mpnJ4ntzogEC_U2VBiDCNWEIMASmboPkLAYC9ApUQoJoF1oIFBqTWVA4OQbMzuODDxsM/pub"
                            // opens link in new tab or window
                            target='_blank'
                            // noreferrer - to prevent knowing where user came from  - Google Analytics Direct traffic instaed of Referral traffic
                            // noopener - disables the JS window.opener property for increased securtity - best practice?
                            rel='noreferrer noopener'
                        >
                            Resume
                        </Nav.Link>

                        <Nav.Link
                            href='https://github.com/crsmith01'
                            target='_blank'
                            className='links'
                            // react tooltip - need to change to data-tip from data-placement
                            // data-toggle="tooltip"
                            title="GitHub Profile"
                            data-placement="bottom"
                            rel='noreferrer noopener'>
                            <span className='icon'>
                                <i className='fab fa-github'></i>
                            </span>
                        </Nav.Link>

                        <Nav.Link
                            href='https://www.linkedin.com/in/catherine-smith24601'
                            target='_blank'
                            className='links'
                            data-toggle="tooltip"
                            title="LinkedIn Profile"
                            data-placement="bottom"
                            rel='noreferrer noopener'>
                            <span className='icon'>
                                <i className='fa fa-3x fa-linkedin-square'></i>
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavBar;