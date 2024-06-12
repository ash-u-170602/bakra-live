import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ images, isOpen, onRequestClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
            <button onClick={onRequestClose} className="close-button">&times;</button>
            <div className="modal-content">
                <button onClick={prevImage} className="prev-button">&#9664;</button>
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="modal-image" />
                <button onClick={nextImage} className="next-button">&#9654;</button>
            </div>
        </Modal>
    );
};

export default ImageModal;
