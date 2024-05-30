import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Course = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col xs="auto" className="pb-3">
                        <Button variant="primary">Save</Button>{' '}
                        <Button variant="primary">Cancel</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        id="daneTowaru"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Course">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Language</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select</option>
                                            <option value="1">Japanese</option>
                                            <option value="2">Korean</option>
                                            <option value="3">Chinese</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Teacher</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Tab>
                        <Tab eventKey="uwagi" title="Feedback" >
                            <Row>
                                <Col xs={8}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>What can we do better?</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>

                </Row>
            </Form>
        </Container>
    )
}

export default Course;