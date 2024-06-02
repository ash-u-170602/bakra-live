import React from 'react';
import '../styles/PostBox.css';

const PostBox = ({ category, imgSrc, postLink, title, date, description, profileImg, profileName }) => {
    return (
        <div className={`post-box ${category}`}>
            <img src={imgSrc} alt="post" className="post-img" />
            <h2 className="category">{category}</h2>
            <a href={postLink} className="post-title">{title}</a>
            <span className="post-date">{date}</span>
            <p className="post-description">{description}</p>
            <div className="profile">
                <img src={profileImg} alt="profile" className="profile-img" />
                <span className="profile-name">{profileName}</span>
            </div>
        </div>
    );
};

export default PostBox;