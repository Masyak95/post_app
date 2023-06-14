import './App.css';
import {useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "Css", body: "description"},
        {id: 3, title: "React", body: "description"}
    ])
    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")


    const sortedPost = useMemo(() => {
        console.log("тоработала функция сортед пост")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => { //получаем пост из дочернего документа
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue={"sorting by "}
                    options={[
                        {value: "title", name: "title"},
                        {value: "description", name: "description"}
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ? <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"post list number 1"}
                />
                : <h1 style={{textAlign: "center"}}>posts not found!</h1>
            }
        </div>
    );
}

export default App;
