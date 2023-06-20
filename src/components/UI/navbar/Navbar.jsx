import React, { useContext } from 'react';
import s from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return (
        <div className={s.navbar}>
            <MyButton onClick={logout}>Log out</MyButton>
            <div className={s.link}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;
