import './App.css';
import {useRef, useState} from "react";
import PostList from "./components/PostList/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "Css", body: "description"},
        {id: 3, title: "React", body: "description"}
    ])

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
        setPosts([...posts, newPost])
        setTitle("")
        setBody(" ")
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type={"text"}
                    placeholder={"title"}
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type={"text"}
                    placeholder={"description"}
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title={"post list number 1"}/>
        </div>
    );
}

export default App;
