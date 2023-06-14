import React from 'react';
import s from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [s.modal]
    if (visible === true){
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={()=> setVisible(false)}>
            <div className={s.content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;