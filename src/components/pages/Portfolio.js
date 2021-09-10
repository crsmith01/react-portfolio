import React from 'react';
import { Container, Card, Row, Button } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

import cadmiumRVA from "../../images/images-tinified/cadmium-rva.png";
import cadmium from "../../images/images-tinified/cadmium-screenshot.png";
import passwordGenerator from "../../images/images-tinified/password-screenshot.png";
import workDayScheduler from "../../images/images-tinified/work-day-scheduler-screenshot.png";
import employeeTracker from "../../images/images-tinified/employee-tracker-welcome.png";
import eCommerceBackEnd from "../../images/e-commerce-back-end.gif";
import fitnessTracker from "../../images/images-tinified/fitness-tracker-stats.png";
import progressiveBudget from "../../images/images-tinified/pwa-screenshot.png";
import codingQuiz from "../../images/images-tinified/codingQuiz.png";
import readmeGenerator from "../../images/images-tinified/readmeGenerator.png";
import reduxStore from "../../images/reduxStore.gif";



const cardStyles = {
    // border='',
    padding: '15px'
};

const containerStyle = {
    // border='',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'

};


const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                Take a look at these recent projects!
            </p>
            <Container style={{ containerStyle }}>
                {/* <Row className="row-container"> */}
                    <ScrollAnimation
                        animateIn='pulse'
                        offset={500}
                        initiallyVisible={false}
                    >
                        <Card className='card' style={cardStyles}>
                            <a href="https://cadmiumrva.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                                <Card.Img variant="top" src={cadmiumRVA} alt="Cadmium application screenshot of events page" />
                            </a>
                            <Card.Body>
                                <Card.Title>Cadmium-RVA</Card.Title>
                                <Card.Text>
                                    React, crowd-sourced app for finding art events in the Richmond, VA area
                                </Card.Text>
                                <Button variant="outline-primary" href="https://github.com/sethvance26/Cadmium-Seth" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                <Button variant="outline-success" href="https://cadmiumrva.herokuapp.com/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>

                            </Card.Body>
                        </Card>
                    </ScrollAnimation>
                    <Container>
                        {/* <Row> */}
                            <Card className='card'>
                                <a href="https://ancient-lowlands-14789.herokuapp.com/login" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={cadmium} alt="Cadmium application screenshot" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Cadmium</Card.Title>
                                    <Card.Text>
                                        Crowd-sourced app for finding art events in the Richmond, VA area
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/johnsoncm/cadmium" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://ancient-lowlands-14789.herokuapp.com/login" target='_blank' rel='noreferrer noopener'>Deployed App</Button>

                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://crsmith01.github.io/homework-3-password-generator/" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={passwordGenerator} alt="Screenshot of password generator application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Password Generator</Card.Title>
                                    <Card.Text>
                                        App to create a password with alphanumeric and special characters
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/homework-3-password-generator" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://crsmith01.github.io/homework-3-password-generator/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>
                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://github.com/crsmith01/homework4-code-quiz" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={codingQuiz} alt="Gif animation of back end of e-commerce application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Coding Quiz</Card.Title>
                                    <Card.Text>
                                        A timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/homework4-code-quiz" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://crsmith01.github.io/homework4-code-quiz/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>                        </Card.Body>
                            </Card>
                        {/* </Row> */}





                        {/* <Row> */}
                            <Card className='card' >
                                <a href="https://crsmith01.github.io/homework5-day-planner/" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={workDayScheduler} alt="Screenshot of deployed work day scheduler application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Work Day Scheduler</Card.Title>
                                    <Card.Text>
                                        Work day scheduling app with color-coded time slots and ability to save notes.
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/homework5-day-planner" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://crsmith01.github.io/homework5-day-planner/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>
                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://protected-tundra-70136.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={fitnessTracker} alt="Screenshot of stats page of fitness tracker application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Fitness Tracker</Card.Title>
                                    <Card.Text>
                                        Application to allow users to view, create, and track daily workouts. Uses MongoDB and Mongoose.
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/fitness-tracker" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://protected-tundra-70136.herokuapp.com/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>
                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://mighty-sierra-97786.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={progressiveBudget} alt="Screenshot of progressive budget application functionality" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Progressive Budget PWA</Card.Title>
                                    <Card.Text>
                                        App with offline access and functionality allows users to add expenses and deposits to their budget with or without a connection.
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/fitness-tracker" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://protected-tundra-70136.herokuapp.com/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>
                                </Card.Body>
                            </Card>
                        {/* </Row> */}


                        {/* <Row> */}
                            <Card className='card' >
                                <a href="https://salty-refuge-35551.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={reduxStore} alt="Screenshot of progressive budget application functionality" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Redux Store</Card.Title>
                                    <Card.Text>
                                        App that refactors an existing e-commerce platform so that it uses <a href="https://redux.js.org/" target='_blank' rel='noreferrer noopener'>Redux</a>
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/redux-store" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                    <Button variant="outline-success" href="https://salty-refuge-35551.herokuapp.com/" target='_blank' rel='noreferrer noopener'>Deployed App</Button>
                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://github.com/crsmith01/hw11-employee-tracker" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={employeeTracker} alt="Screenshot of welcome page of employee tracker application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>Employee Tracker</Card.Title>
                                    <Card.Text>
                                        Content Management System to view and manage departments, roles, and employees of a company.
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/hw11-employee-tracker" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                </Card.Body>
                            </Card>

                            <Card className='card' >
                                <a href="https://github.com/crsmith01/hw12-e-commerce-back-end" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={eCommerceBackEnd} alt="Gif animation of back end of e-commerce application" />
                                </a>
                                <Card.Body>
                                    <Card.Title>E-Commerce Back End</Card.Title>
                                    <Card.Text>
                                        Back end for an e-commerce site
                                    </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/hw12-e-commerce-back-end" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                </Card.Body>
                            </Card>
                        {/* </Row>
                        <Row> */}
                            <Card className='card' >
                                <a href="https://github.com/crsmith01/homework8-readme-generator" target='_blank' rel='noreferrer noopener'>
                                    <Card.Img variant="top" src={readmeGenerator} alt="Screenshot of progressive budget application functionality" />
                                </a>
                                <Card.Body>
                                    <Card.Title>README Generator</Card.Title>
                                    <Card.Text>
                                        A command-line application that dynamically creates a professional README from a user's input via the Inquirer package                            </Card.Text>
                                    <Button variant="outline-primary" href="https://github.com/crsmith01/homework8-readme-generator" target='_blank' rel='noreferrer noopener'>GitHub Repo</Button>
                                </Card.Body>
                            </Card>
                        {/* </Row> */}
                    </Container>
                {/* </Row> */}
            </Container>
        </div>
    )
}

// const Portfolio = () => {
//     <Container>
//         <Row className="mb-5 mt-3">
//             <Col lg="8">
//                 <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
//                 <hr className="t_border my-4 ml-0 text-left" />
//             </Col>
//         </Row>
//         <Row>
//             {Projects.map((data, i) => {
//                 return (
//                     <Card key={i} style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src={data.img} alt={data.alt} />
//                         <Card.Body>
//                             <Card.Title>{data.name}</Card.Title>
//                             <Card.Text>
//                                 {data.description}
//                             </Card.Text>
//                             <Card.Link href={data.repo} variant="outline-primary">Repo</Card.Link>
//                             <Card.Link href={data.deployedApp} variant="outline-success">Deployed App</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 );
//             })};
//         </Row>
//     </Container>
// }

export default Portfolio;