import './App.css';
import { useState} from "react";
import PostList from "./components/PostList/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "Css", body: "description"},
        {id: 3, title: "React", body: "description"}
    ])

    const createPost = ( newPost)=>{
        setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={"post list number 1"}/>
        </div>
    );
}

export default App;
