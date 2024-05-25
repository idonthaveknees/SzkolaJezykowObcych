import './Courses.css';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container>
            <Card className="mb-4">
                <Card.Title>Our courses</Card.Title>
                <Card.Text>All you need to know about our courses.</Card.Text>
            </Card>
            <Row className="course-item align-items-center mb-3">
                <Col className="text-end" xs={{ span: 9, order: 1 }} >
                    <h5>Japanese Language Study - N5-N1</h5>
                    <p>Comprehensive courses from beginner to advanced levels, preparing for the JLPT exams.</p>
                </Col>
                <Col xs={{ span: 3, order: 2 }}>
                    <Image src="/courses/japanese_course.jpg" className="course-photos" alt="Japanese course" />
                </Col>
            </Row>
            <Row className="course-item align-items-center mb-3">
                <Col className="text-start" xs={{ span: 9, order: 2 }} >
                    <h5>Korean Language Study - Levels 1-6</h5>
                    <p>Courses tailored to different proficiency levels, aiming for the TOPIK certification.</p>
                </Col>
                <Col xs={{ span: 3, order: 1 }} >
                    <Image src="/courses/korean_course.jpg" className="course-photos" alt="Korean course" />
                </Col>
            </Row>
            <Row className="course-item align-items-center mb-3">
                <Col className="text-end" xs={{ span: 9, order: 1 }} >
                    <h5>Chinese Language Study - HSK II-VI</h5>
                    <p>Structured courses for all levels, focusing on achieving HSK certification.</p>
                </Col>
                <Col xs={{ span: 3, order: 2 }}>
                    <Image src="/courses/chinese_course.jpg" className="course-photos" alt="Chinese course" />
                </Col>
            </Row>
            <Row className="course-item align-items-center mb-3">
                <Col className="text-start" xs={{ span: 9, order: 2 }} >
                    <h5>Getting Ready for JLPT, TOPIK, and HSK Tests</h5>
                    <p>Special preparation courses designed to help you excel in these standardized language proficiency tests.</p>
                </Col>
                <Col xs={{ span: 3, order: 1 }}>
                    <Image src="/courses/test_courses.jpg" className="course-photos" alt="Test courses" />
                </Col>
            </Row>
        </Container>
    );
}

export default Courses;