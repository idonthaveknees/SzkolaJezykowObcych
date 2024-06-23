import './Courses.css';
import { Card, Container } from 'react-bootstrap';
import CourseItem from './../../components/CourseItem';

const courseData = [
    {
        title: 'Japanese Language Study - N5-N1',
        description: 'Comprehensive courses from beginner to advanced levels, preparing for the JLPT exams.',
        imageUrl: '/courses/japanese_course.jpg',
        imageAlt: 'Japanese course',
        textAlign: 'text-end',
        order: { text: 1, image: 2 }
    },
    {
        title: 'Korean Language Study - Levels 1-6',
        description: 'Courses tailored to different proficiency levels, aiming for the TOPIK certification.',
        imageUrl: '/courses/korean_course.jpg',
        imageAlt: 'Korean course',
        textAlign: 'text-start',
        order: { text: 2, image: 1 }
    },
    {
        title: 'Chinese Language Study - HSK II-VI',
        description: 'Structured courses for all levels, focusing on achieving HSK certification.',
        imageUrl: '/courses/chinese_course.jpg',
        imageAlt: 'Chinese course',
        textAlign: 'text-end',
        order: { text: 1, image: 2 }
    },
    {
        title: 'Getting Ready for JLPT, TOPIK, and HSK Tests',
        description: 'Special preparation courses designed to help you excel in these standardized language proficiency tests.',
        imageUrl: '/courses/test_courses.jpg',
        imageAlt: 'Test courses',
        textAlign: 'text-start',
        order: { text: 2, image: 1 }
    },
];

const Courses = () => {
    return (
        <Container>
            <Card className="mb-4" id="courses-intro">
                <Card.Text>All you need to know about our courses.</Card.Text>
            </Card>
            {courseData.map((course, index) => (
                <CourseItem key={index} {...course} />
            ))}
        </Container>
    );
}

export default Courses;