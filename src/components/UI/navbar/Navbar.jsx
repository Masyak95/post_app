import React from 'react';
import s from "./Navbar.modal.css"

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.link}>
                <a href="/about"> About web</a>
                <a href="/posts"> Posts</a>
            </div>
        </div>
    );
};

export default Navbar;