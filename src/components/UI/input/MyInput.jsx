import React from 'react';
import s from "./MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return (
       <input className={s.input} {...props}/> //все что будет попадать в myInput будет попадать в обычный input
    );
});

export default MyInput;