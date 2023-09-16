import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home'
import { NotFound404 } from '../Pages/404'
import { AboutMe } from "../Pages/AboutMe";

function RoutesApp() {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/AboutMe/'} element={<AboutMe />} />
            <Route path={'*'} element={<NotFound404 />} />
        </Routes>
    )
}

export { RoutesApp }