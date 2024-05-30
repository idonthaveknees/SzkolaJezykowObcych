import { Tab, Tabs, Container, Carousel, Image, Card } from 'react-bootstrap';
import './Teachers.css';

export const Teachers = () => {
    return (
        <Container>
            <Tabs
                defaultActiveKey="japaneseTeachers"
                id="teachers-tabs"
                className="mb-1"
            >
                <Tab eventKey="japaneseTeachers" title="Japanese Teachers">
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_1.jpg"
                                alt="Furukawa Kimiko"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Furukawa Kimiko</h3>
                                <p>Teacher with over 10 years of experience. Will help you take the first steps into the language.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_2.jpg"
                                alt="Fujiwara Jun"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Fujiwara Jun</h3>
                                <p>Grammar specialist with over 5 years of experience teaching advanced groups.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_3.jpg"
                                alt="Iwamoto Yasuhiro"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Iwamoto Yasuhiro</h3>
                                <p>Teacher specialising in individual learning and small groups. Over 7 years of experience with both beginners and advanced learners.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
                <Tab eventKey="koreanTeachers" title="Korean Teachers">
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_4.jpg"
                                alt="Eum Iseul"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Eum Iseul</h3>
                                <p>Teacher with over 10 years of experience. Will help you take the first steps into the language.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_5.jpg"
                                alt="Seong Jaesang"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Seong Jaesang</h3>
                                <p>Grammar specialist with over 5 years of experience teaching advanced groups.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
                <Tab eventKey="chineseTeachers" title="Chinese Teachers">
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_6.jpg"
                                alt="Duan Weisheng"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Duan Weisheng</h3>
                                <p>Teacher with over 10 years of experience. Will help you take the first steps into the language.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100"
                                src="/teachers/teacher_7.jpg"
                                alt="Fang Bohai"
                            />
                            <Carousel.Caption className="text-on-photos">
                                <h3>Fang Bohai</h3>
                                <p>Grammar specialist with over 5 years of experience teaching advanced groups.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
            </Tabs>
            <Card className="mt-3" id="teachers-description">
                <Card.Text>All our teachers are native speakers who have years of experience teaching students of all levels. We also have proven academic credentials and partake in regular courses to further develop familiarity with the principles and practice of effective teaching as well as to find appropriate resources and materials for teaching and testing.</Card.Text>
            </Card>
        </Container>
    )
}

export default Teachers;