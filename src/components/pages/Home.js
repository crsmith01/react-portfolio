import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Technologies from '../Technologies';
// import catherineHeadshot from '/images/images-tinified/catherine_headshot_sunken_garden.png';


const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div id='aboutMe'>
                        <section id='aboutMeContainer'>
                            <Image
                                className='headshot'
                                // src={catherineHeadshot}
                                // src='../public/images/images-tinified/catherine-headshot-sunken-garden.png'
                                src='https://avatars.githubusercontent.com/crsmith01'
                                alt='Catherine Smith headshot'
                                roundedCircle
                            />
                            <div id='aboutMeText'>
                                <h1><u> About Me </u></h1>
                                <br></br>
                                <p>
                                    My name is Catherine, and I am an emerging full-stack Javascript web developer currently completing the
                                    University of Richmond's Coding Bootcamp. After earning my BA in Music and Shakespeare Studies
                                    at the College of William and Mary, I ventured to Glasgow to acquire my MSc in Information and Library Studies at the
                                    University of Strathclyde. I decided to pursue web development because it's a fast-paced,
                                    challenging, creative career path with constant opportunities to grow as a person and professional.
                                </p>
                                <br></br>
                                <p>
                                    While volunteering time as a Library Ambassador at the Earl Gregg Swem Library, I worked with
                                    the media team to create virtual tours and how-to videos for utilizing library services, and I
                                    contacted professors and students to act as a reference point if they had any questions about how to
                                    utilize library resources at William and Mary. Ensuring that people know how to best access and utilize the resources at
                                    their disposal is a passion of mine. I enjoy studying new subjects, learning German, drinking tea, singing, watching LOTR, and
                                    listening to audiobooks (particularly if they are narrated by Richard Armitage, Elizabeth Wiley, Jim Dale, or
                                    Stephen Fry)!
                                </p>
                            </div>
                        </section>
                    </div>
                </Row>
            </Container>
            <Container>
                <Technologies />
            </Container>
        </div>
    )
}

export default Home;