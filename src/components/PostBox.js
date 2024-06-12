import React, { useState } from 'react';
import "../styles/PostBox.css";
import ImageModal from './ImageModal';

const PostBox = ({
    id,
    price,
    imagesUrl,
    category,
    weight,
    breed,
    location,
    isAvailable,
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const sendMessage = () => {
        const message = `Hello, I am interested in your ${breed} ${category} which is priced at ${price}. Please contact me.
        Id=${id}`;
        const whatsappUrl = `https://wa.me/919310833991?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="post-box">
            <div className="image-container">
                <img src={imagesUrl[0]} alt={`${breed}`} className="post-img" />
                {!isAvailable && <div className="sold-out-overlay">Sold Out</div>}
            </div>
            <div className="post-details">
                <h2 className="post-title">{breed}</h2>
                <p>Price: {price}</p>
                <p>Weight: {weight}</p>
                <p>Location: {location}</p>
            </div>
            <button className="buy-now-button" onClick={sendMessage} disabled={!isAvailable}>
                Buy Now
            </button>
            <button className="view-images-button" onClick={openModal}>View Images</button>
            <ImageModal images={imagesUrl} isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default PostBox;
