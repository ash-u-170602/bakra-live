import React, { useState } from 'react';
import '../styles/PostFilter.css';

const PostFilter = ({ setFilter }) => {
    const [active, setActive] = useState('all');

    const handleFilterClick = (value) => {
        setActive(value);
        setFilter(value);
    };

    return (
        <div className="post-filter container">
            <span className={`filter-item ${active === 'all' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('all')} data-filter="all">All</span>
            <span className={`filter-item ${active === 'home-garden' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('home-garden')} data-filter="goat">Goat</span>
            <span className={`filter-item ${active === 'cash-crops' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('cash-crops')} data-filter="sheep">Sheep</span>
            <span className={`filter-item ${active === 'other' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('other')} data-filter="other">Buffalo</span>
        </div>
    );
};

export default PostFilter;
