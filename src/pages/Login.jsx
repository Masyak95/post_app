import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts', { replace: true });
    };

    if (isAuth) {
        navigate('/posts', { replace: true });
    }

    return (
        <div>
            <h1>Authentication page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="username"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;