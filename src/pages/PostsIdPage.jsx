import React from 'react';
import {useParams} from "react-router-dom";

const PostsIdPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>You have accessed the post page with ID {params.id}</h1>
        </div>
    );
};

export default PostsIdPage;