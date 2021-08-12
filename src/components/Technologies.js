import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Technologies = () => {
    return (
        <Container className='techTable'>
            <Row className='techCategories'>
                <Col>
                    <h2>Programming Languages</h2>
                </Col>
                <Col>
                    <h2>Programming Tools</h2>
                </Col>
                <Col>
                    <h2>Library Science Technology</h2>
                </Col>
                <Col>
                    <h2>Other Technology</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className='techList' type='none'>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                    </ul>
                </Col>
                <Col>
                    <ul className='techList' type='none'>
                        <li>GitHub, Git Pages, & Git Commands</li>
                        <li>Heroku & Digital Oceans</li>
                        <li>Bootstrap, Bulma, & Semantic UI</li>
                        <li>Insomnia & Postman</li>
                        <li>MySQL & Sequelize</li>
                        <li>MongoDB & Mongoose & Robo 3T</li>
                        <li>jQuery</li>
                        <li>RESTful APIs</li>
                        <li>MERN</li>
                        <li>MVC file structure</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>Moment</li>
                        <li>Font Awesome & Google Fonts</li>
                        <li>Sweetalerts</li>
                        <li>Progressive Web Apps (PWAs)</li>
                        <li>TypeDefs and Resolvers</li>
                        <li>Queries and Mutations</li>
                        <li>Manifest.json & Service workers</li>
                        <li>GraphQL & Apollo Server</li>
                        <li>Authentication (JWT)</li>
                    </ul>
                </Col>
                <Col>
                    <ul className='techList' type='none'>
                        <li>Library of Congress Classification</li>
                        <li>Dewey Decimal Classification</li>
                        <li>Superindendent of Docs</li>
                        <li>Biblioteca</li>
                        <li>Infolinx</li>
                        <li>Alma, SUPrimo, Primo, Leganto from Ex Libris</li>
                        <li>Metadata Schemas: MARC, ISBD, RDA, AACR2</li>
                        <li>Koha</li>
                        <li>WorldCat</li>
                        <li>OCLC</li>

                    </ul>
                </Col>
                <Col>
                    <ul className='techList' type='none'>
                        <li>Google Suite</li>
                        <li>Microsoft Office Suite</li>
                        <li>Noteflight</li>
                        <li>Wordpress</li>
                        <li>QuickBooks</li>
                        <li>Typing Speed: 81 wpm with 98% accuracy</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};


export default Technologies;