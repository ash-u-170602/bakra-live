import React from 'react';
import '../styles/PostBox.css'; // Import CSS for styling

const PostBox = ({ category, imgSrc, postLink, breed, price, weight, location }) => {
    return (
        <div className={`post-box ${category}`}>
            <img src={imgSrc} alt="post" className="post-img" />
            <h2 className="category">{category}</h2>
            <a href={postLink} className="post-title">{breed}</a>
            <span className="post-date">Price: {price}</span>
            <span className="post-date">Weight: {weight}</span>
            <p className="post-description">Location: {location}</p>
            <div className="profile">
                <button className="buy-now-button">Buy Now</button> {/* Add the button */}
            </div>
        </div>
    );
};

export default PostBox;
