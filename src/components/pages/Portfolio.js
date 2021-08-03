// import `useState` with React so that we can utilize the hook
import React from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import Projects from "../Projects";




const Portfolio = () => {
    <Container>
        <Row className="mb-5 mt-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        <Row>
            {Projects.map((data, i) => {
                return (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.img} alt={data.alt}/>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.description}}
                            </Card.Text>
                            <Card.Link href={data.repo} variant="primary">Repo</Card.Link>
                            <Card.Link href={data.deployedApp} variant="secondary">Deployed App</Card.Link>
                        </Card.Body>
                    </Card>
                );
            })};
        </Row>
    </Container>
}

export default Portfolio;