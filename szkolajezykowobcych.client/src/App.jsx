import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card, Image } from 'react-bootstrap';
import './App.css';

const HomePage = () => {
    return (
        <Container flex>
            <section className="main-section">
                <Container>
                    <Image src="/fuji.jpg" className="background-image" />
                    <h1>Welcome to the Foreign Language School</h1>
                    <p>Learning languages has never been easier!</p>
                    <Link to="/courses">
                        <Button className="offer-button" size="lg">See our offer</Button>
                    </Link>
                </Container>
            </section>

            <section className="features-section">
                <Container>
                    <h2 className="mb-5">Why choose our school?</h2>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Experienced Teachers</Card.Title>
                                    <Card.Text>
                                        Our staff consists of experienced teachers who will help you achieve your language goals.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Flexible Class Hours</Card.Title>
                                    <Card.Text>
                                        We offer classes at different times and days of the week to accommodate your schedule.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Individual Approach</Card.Title>
                                    <Card.Text>
                                        We will tailor the curriculum to your needs, abilites, and wants.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="opinion-section">
                <Container>
                    <h2 className="mb-5">What do our students say?</h2>
                    <p className="opinion-text">I never thought learning a language could be so enjoyable! I recommend the school to anyone who wants to learn a new language quickly and effectively.</p>
                    <p className="opinion-author">- John Doe</p>
                </Container>
            </section>

            <section className="tests-section">
                <Container>
                    <h2 className="text-center mb-5">We can help you get ready for:</h2>
                    <Row>
                        <Col>
                            <Image src="/jlpt.jpg" className="test" alt="JLPT" />
                        </Col>
                        <Col>
                            <Image src="/topik.jpg" className="test" alt="TOPIK" />
                        </Col>
                        <Col>
                            <Image src="/hsk.jpg" className="test" alt="HSK" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
}

export default HomePage;