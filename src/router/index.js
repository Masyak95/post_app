import About from "../pages/About";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";
import Error from "../pages/Error";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostsIdPage, exact: true},
    {path: '/*', component: Error, exact: false},
];
