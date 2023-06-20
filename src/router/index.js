import About from "../pages/About";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostsIdPage, exact: true},
    {path: '/*', component: Error, exact: false}
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]