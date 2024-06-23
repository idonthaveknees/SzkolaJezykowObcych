import { useState, useEffect } from 'react';
import { Container, Modal, Image } from 'react-bootstrap';
import Gallery from './../../components/PhotoGallery';
import './Gallery.css';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/4.jpg',
        '/gallery/5.jpg',
        '/gallery/6.jpg',
        '/gallery/7.jpg',
        '/gallery/8.jpg',
        '/gallery/9.jpg',
        '/gallery/10.jpg',
        '/gallery/11.jpg',
        '/gallery/12.jpg',
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <Container>
            <Gallery images={images} onImageClick={handleImageClick} />

            <Modal show={selectedImage !== null} onHide={handleClose} centered size="lg">
                <Modal.Body>
                    <Image src={selectedImage} fluid />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default GalleryPage;