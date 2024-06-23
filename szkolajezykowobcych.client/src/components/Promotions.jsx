import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Promotions = ({ promotions }) => {
    return (
        <Card className="mb-5 discount">
            <Card.Title className="discount-title">Promotions and Discounts</Card.Title>
            <Card.Text className="discount-text">
                <ul className="list-unstyled flex-grow-1">
                    {promotions.map(promotion => (
                        <li key={promotion.id}>{promotion.promotion}</li>
                    ))}
                </ul>
            </Card.Text>
        </Card>
    );
};

Promotions.propTypes = {
    promotions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            promotion: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Promotions;