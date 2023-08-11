import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home'
import { NotFound404 } from '../Pages/404'

function RoutesApp() {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'*'} element={<NotFound404 />} />
        </Routes>
    )
}

export { RoutesApp }