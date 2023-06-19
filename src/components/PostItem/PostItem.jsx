import React from 'react';
import s from "./PostItem.module.css"
import MyButton from "../UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate = useNavigate();

    const handleOpenPost = () => {
        navigate(`/posts/${props.post.id}`);
    };

    const handleDeletePost = () => {
        props.remove(props.post);
    };

    return (
        <div className={s.post}>
            <div className="content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className={s.btn}>
                <MyButton onClick={handleOpenPost}>Open </MyButton>
                <MyButton onClick={handleDeletePost}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
