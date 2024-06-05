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
            <span
                className={`filter-item ${active === 'all' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('all')}
                data-filter="all"
            >
                All
            </span>
            <span
                className={`filter-item ${active === 'goat' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('goat')}
                data-filter="goat"
            >
                Goat
            </span>
            <span
                className={`filter-item ${active === 'sheep' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('sheep')}
                data-filter="sheep"
            >
                Sheep
            </span>
            <span
                className={`filter-item ${active === 'buffalo' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('buffalo')}
                data-filter="buffalo"
            >
                Buffalo
            </span>
        </div>
    );
};

export default PostFilter;
