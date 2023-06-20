import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Authentication page</h1>
            <form>
                <MyInput type="text" placeholder={"username"}/>
                <MyInput type="password" placeholder={"password"}/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;