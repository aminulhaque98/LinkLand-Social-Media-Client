import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NotFountPage from "../../NotFountPages/NotFountPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllSocialMediaPost from "../../Pages/SocialMediaPost/AllSocialMediaPost";
import SignUp from "../../SignUp/SignUp";
import About from "../../Pages/About/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/media',
                element: <AllSocialMediaPost></AllSocialMediaPost>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '*',
        element: <NotFountPage></NotFountPage>
    }
]);

export default router;
