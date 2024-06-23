import { Row, Col, Image, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CourseItem = ({ title, description, imageUrl, imageAlt, textAlign, order }) => {
    return (
        <Row className="course-item align-items-center mb-3">
            <Col className={textAlign} xs={{ span: 9, order: order.text }} >
                <h5>{title}</h5>
                <p>{description}</p>
            </Col>
            <Col xs={{ span: 3, order: order.image }}>
                <Card className="image-container">
                    <Image src={imageUrl} className="course-photos" alt={imageAlt} fluid />
                </Card>
            </Col>
        </Row>
    );
}

CourseItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    textAlign: PropTypes.string.isRequired,
    order: PropTypes.shape({
        text: PropTypes.number.isRequired,
        image: PropTypes.number.isRequired,
    }).isRequired,
};

export default CourseItem;