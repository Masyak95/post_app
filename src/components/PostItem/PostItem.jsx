import React from 'react';
import s from "./PostItem.module.css"
import MyButton from "../UI/button/MyButton";


const PostItem = (props) => {



    return (
        <div className={s.post}>
            <div className="content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className={s.btn}>
                <MyButton onClick={()=> props.remove(props.post)}>Open</MyButton>
                <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;