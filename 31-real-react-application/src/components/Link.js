import React from 'react';

const Link = ({ active, children, onClick }) => {
    return (
        <a href="/" className={`item ${active && 'active'}`} onClick={e => onClick(e)}>
            {children}
        </a>
    );
};

export default Link;