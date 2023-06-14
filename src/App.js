import './App.css';
import {useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "Css", body: "description"},
        {id: 3, title: "React", body: "description"}
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPost = useMemo(() => {
        console.log("тоработала функция сортед пост")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => { //получаем пост из дочернего документа
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"post list number 1"}
            />

        </div>
    );
}

export default App;
