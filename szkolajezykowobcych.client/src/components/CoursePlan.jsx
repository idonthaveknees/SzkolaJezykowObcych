import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CoursePlan = ({ plan, description }) => {
    return (
        <Card className="w-100 plans">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{plan.name}</Card.Title>
                <Card.Text className="text-center">{plan.price} / month</Card.Text>
                <p>{description}</p>
                <ul className="list-unstyled flex-grow-1">
                    {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
};

CoursePlan.propTypes = {
    plan: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
};

export default CoursePlan;