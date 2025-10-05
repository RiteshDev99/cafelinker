import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store/store.js";
import {Provider} from "react-redux";
import Home from "./components/pages/Home.jsx";
import LoginPage from "./components/pages/Login.jsx";
import SignupPage from "./components/pages/Signup.jsx";
import RegisterPage from "./components/pages/Register.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import DashBoardPage from "./components/pages/Dashboard.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element:<LoginPage />,
            },
            {
                path: "/signup",
                element:<SignupPage />,
            },
            {
                path: "/register",
                element:<RegisterPage />,
            },
            {
                path: "/dashBoard",
                element:<DashBoardPage/>,
            },
        ],
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider  store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)
