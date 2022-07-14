import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import { LOGIN_ROUTE, MAIN_ROUTE } from "./utils/consts";

export const authRoutes = []
export const publicRoutes = [
    {   
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {   
        path: MAIN_ROUTE,
        Component: MainPage
    },
]