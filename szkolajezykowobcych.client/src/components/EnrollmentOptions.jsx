import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const EnrollmentOptions = ({ options }) => {
    return (
        <Card className="mb-5 enrollment">
            <Card.Title className="enrollment-title">Enrollment Options</Card.Title>
            <Card.Text className="enrollment-text">
                <ul className="list-unstyled flex-grow-1">
                    {options.map(option => (
                        <li key={option.id}>{option.option}</li>
                    ))}
                </ul>
            </Card.Text>
        </Card>
    );
};

EnrollmentOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            option: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default EnrollmentOptions;