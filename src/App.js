import './App.css';
import { useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "Css", body: "description"},
        {id: 3, title: "React", body: "description"}
    ])

    const [selectedSort, setSelectedSort] = useState("")
    const createPost = ( newPost)=>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) => { //получаем пост из дочернего документа
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue={"sorting by "}
                    options={[
                        {value:"title", name: "title"},
                        {value:"title", name: "description"}
                    ]}
                />
            </div>
            {posts.length !== 0
                ?  <PostList
                    remove={removePost}
                    posts={posts}
                    title={"post list number 1"}
                />
                : <h1 style={{textAlign: "center"}}>posts not found!</h1>
            }
        </div>
    );
}

export default App;
