import React from "react";
import "../styles/PostBox.css";

const PostBox = ({
    id,
    uploadedBy,
    price,
    imagesUrl,
    category,
    weight,
    sellerNumber,
    breed,
    location,
    isAvailable
}) => {
    return (
        <div className="post-box">
            <img src={imagesUrl[0]} alt={`${breed}`} className="post-image" />
            <div className="post-details">
                <h2>{breed}</h2>
                <p>Price: {price}</p>
                <p>Weight: {weight}</p>
                <p>Location: {location}</p>
                <p>Seller Number: {sellerNumber}</p>
                <p>Uploaded By: {uploadedBy}</p>
                <p>Available: {isAvailable ? "Yes" : "No"}</p>
            </div>
            <a href={`post-page-${id}.html`} className="post-link">View Post</a>
        </div>
    );
};

export default PostBox;
