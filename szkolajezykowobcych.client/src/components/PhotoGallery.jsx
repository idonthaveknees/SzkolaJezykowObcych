import { Row, Col, Image, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Gallery = ({ images, onImageClick }) => {
    return (
        <Row>
            {images.map((image, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                    <Card className="image-container">
                        <Image
                            src={image}
                            fluid
                            className="gallery-image"
                            onClick={() => onImageClick(image)}
                        />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default Gallery;