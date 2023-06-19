import './App.css';
import {useEffect, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";
import usePagination from "./hooks/usePagination";


function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const pagesArray = usePagination(totalPages); // Используем кастомный хук usePagination

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>error ${postError}</h1>}
            {isPostsLoading ? (
                <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                    <Loader/>
                </div>
            ) : (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"post about js"}/>
            )}
            <div className={"page__wrapper"}>
                {pagesArray.map((p) => (
                    <span
                        onClick={()=> setPage(p)}
                        className={page === p ? "page page__current" : "page"}
                        key={p}
                    >
                        {p}
                    </span>
                ))}
            </div>

        </div>
    );
}

export default App;
