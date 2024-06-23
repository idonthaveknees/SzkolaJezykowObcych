import './Enroll.css';
import { Container, Row, Col } from 'react-bootstrap';
import CoursePlan from './../../components/CoursePlan';
import EnrollmentOptions from './../../components/EnrollmentOptions';
import Promotions from './../../components/Promotions'

const Enroll = () => {
    const japanesePlans = [
        { id: 1, name: 'Group Courses', price: '$200', features: ['Groups of 5-8 people', 'Levels all the way from N5 to N1', '60 minutes once per week'] },
        { id: 2, name: 'Individual Courses', price: '$400', features: ['One-on-one classes with the teacher', 'Level of teaching matched to the student', '60 minutes 1-3 times a week'] },
        { id: 3, name: 'Test Practice', price: '$100', features: ['Will prepare you for any JLPT level exam - from N5 to N1', 'Number of classes dependnig on the student'] },
    ];

    const koreanPlans = [
        { id: 11, name: 'Group Courses', price: '$180', features: ['Groups of 5-8 people', 'Levels all the way from 1 to 6', '60 minutes once per week'] },
        { id: 12, name: 'Individual Courses', price: '$375', features: ['One-on-one classes with the teacher', 'Level of teaching matched to the student', '60 minutes 1-3 times a week'] },
        { id: 13, name: 'Test Practice', price: '$120', features: ['Will prepare you for any Topik level exam - from 1 to 6', 'Number of classes dependnig on the student'] },
    ];

    const chinesePlans = [
        { id: 21, name: 'Group Courses', price: '$220', features: ['Groups of 5-8 people', 'Levels all the way from HSK II to HSK VI', '60 minutes once per week'] },
        { id: 22, name: 'Individual Courses', price: '$425', features: ['One-on-one classes with the teacher', 'Level of teaching matched to the student', '60 minutes 1-3 times a week'] },
        { id: 23, name: 'Test Practice', price: '$100', features: ['Will prepare you for any HSK level exam - from II to VI', 'Number of classes dependnig on the student'] },
    ];

    const descriptions = {
        'Group Courses': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Individual Courses': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Test Practice': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    };

    const enrollmentOptions = [
        { id: 91, option: 'Flexible start dates' },
        { id: 92, option: 'Convenient class timings' },
        { id: 83, option: 'Easy registration process' },
    ];

    const promotions = [
        { id: 81, promotion: '10% off for new students' },
        { id: 82, promotion: 'Refer a friend and get 20% off' },
    ];

    return (
        <Container flex>
            <h1 className="text-center mb-5 course-title">Our Plans and Prices</h1>
            <Row>
                <h3 className="course-language">Japanese</h3>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                {japanesePlans.map(plan => (
                    <Col key={plan.id}>
                        <CoursePlan plan={plan} description={descriptions[plan.name]} />
                    </Col>
                ))}
            </Row>
            <Row>
                <h3 className="course-language">Korean</h3>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                {koreanPlans.map(plan => (
                    <Col key={plan.id}>
                        <CoursePlan plan={plan} description={descriptions[plan.name]} />
                    </Col>
                ))}
            </Row>
            <Row>
                <h3 className="course-language">Chinese</h3>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                {chinesePlans.map(plan => (
                    <Col key={plan.id}>
                        <CoursePlan plan={plan} description={descriptions[plan.name]} />
                    </Col>
                ))}
            </Row>


            <EnrollmentOptions options={enrollmentOptions} />
            <Promotions promotions={promotions} />
        </Container>
    );
};

export default Enroll;
