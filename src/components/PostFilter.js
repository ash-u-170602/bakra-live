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
                className={`filter-item ${active === 'Goat' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Goat')}
                data-filter="Goat"
            >
                Goat
            </span>
            <span
                className={`filter-item ${active === 'Sheep' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Sheep')}
                data-filter="Sheep"
            >
                Sheep
            </span>
            <span
                className={`filter-item ${active === 'Buffalo' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Buffalo')}
                data-filter="Buffalo"
            >
                Buffalo
            </span>
        </div>
    );
};

export default PostFilter;
