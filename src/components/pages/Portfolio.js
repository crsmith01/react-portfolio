// import `useState` with React so that we can utilize the hook
import React from 'react';
import { Container, Card, Row, Button } from "react-bootstrap";
// import Projects from "../Projects";

import cadmiumRVA from "../../images/images-tinified/cadmium-rva.png";
import cadmium from "../../images/images-tinified/cadmium-screenshot.png";
import passwordGenerator from "../../images/images-tinified/password-screenshot.png";
import workDayScheduler from "../../images/images-tinified/work-day-scheduler-screenshot.png";
import employeeTracker from "../../images/images-tinified/employee-tracker-welcome.png";
import eCommerceBackEnd from "../../images/images-tinified/e-commerce-back-end.gif";
import fitnessTracker from "../../images/images-tinified/fitness-tracker-stats.png";
import progressiveBudget from "../../images/images-tinified/pwa-screenshot.png";



export default function Portfolio() {
    <div>
        <Container>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cadmiumRVA} alt="Cadmium application screenshot of events page" />
                    <Card.Body>
                        <Card.Title>Cadmium-RVA</Card.Title>
                        <Card.Text>
                            React, crowd-sourced app for finding art events in the Richmond, VA area
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/sethvance26/Cadmium-Seth">GitHub Repo</Button>
                        <Button variant="secondary" href="https://cadmiumrva.herokuapp.com/">Deployed App</Button>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cadmium} alt="Cadmium application screenshot" />
                    <Card.Body>
                        <Card.Title>Cadmium</Card.Title>
                        <Card.Text>
                            Crowd-sourced app for finding art events in the Richmond, VA area
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/sethvance26/Cadmium-Seth">GitHub Repo</Button>
                        <Button variant="secondary" href="https://cadmiumrva.herokuapp.com/">Deployed App</Button>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={passwordGenerator} alt="Screenshot of password generator application" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            App to create a password with alphanumeric and special characters
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/homework-3-password-generator">GitHub Repo</Button>
                        <Button variant="secondary" href="https://crsmith01.github.io/homework-3-password-generator/">Deployed App</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={workDayScheduler} alt="Screenshot of deployed work day scheduler application" />
                    <Card.Body>
                        <Card.Title>Work Day Scheduler</Card.Title>
                        <Card.Text>
                            Work day scheduling app with color-coded time slots and ability to save notes.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/homework5-day-planner">GitHub Repo</Button>
                        <Button variant="secondary" href="https://crsmith01.github.io/homework5-day-planner/">Deployed App</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={employeeTracker} alt="Screenshot of welcome page of employee tracker application" />
                    <Card.Body>
                        <Card.Title>Employee Tracker</Card.Title>
                        <Card.Text>
                            Content Management System to view and manage departments, roles, and employees of a company.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/hw11-employee-tracker">GitHub Repo</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={eCommerceBackEnd} alt="Gif animation of back end of e-commerce application" />
                    <Card.Body>
                        <Card.Title>E-Commerce Back End</Card.Title>
                        <Card.Text>
                            Back end for an e-commerce site
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/hw12-e-commerce-back-end">GitHub Repo</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={fitnessTracker} alt="Screenshot of stats page of fitness tracker application" />
                    <Card.Body>
                        <Card.Title>Fitness Tracker</Card.Title>
                        <Card.Text>
                            Back end for an e-commerce site"
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/fitness-tracker">GitHub Repo</Button>
                        <Button variant="secondary" href="https://protected-tundra-70136.herokuapp.com/">Deployed App</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={progressiveBudget} alt="Screenshot of progressive budget application functionality" /> */}
                    <Card.Body>
                        <Card.Title>Progressive Budget PWA</Card.Title>
                        <Card.Text>
                            Application to allow users to view, create, and track daily workouts.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/crsmith01/fitness-tracker">GitHub Repo</Button>
                        <Button variant="secondary" href="https://protected-tundra-70136.herokuapp.com/">Deployed App</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    </div>

};

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
//                             <Card.Link href={data.repo} variant="primary">Repo</Card.Link>
//                             <Card.Link href={data.deployedApp} variant="secondary">Deployed App</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 );
//             })};
//         </Row>
//     </Container>
// }

// export default Portfolio;