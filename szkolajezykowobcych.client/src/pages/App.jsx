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
                                        We will tailor the curriculum and the way we teach to your needs, abilites, and wants.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Card className="pb-3 opinion-section">
                    <Card.Title className="mb-3" id="opinion-title">What do our students say?</Card.Title>
                    <Card.Text id="opinion-text">I never thought learning a language could be so enjoyable! I recommend the school to anyone who wants to learn a new language quickly and effectively.</Card.Text>
                    <Card.Text id="opinion-author">- John Doe</Card.Text>
                </Card>
            </section>

            <section>
                <Card className="pt-3 pb-3 tests-section">
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
                </Card>
            </section>
        </Container>
    );
}

export default HomePage;