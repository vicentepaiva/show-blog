import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Post } from '../pages/post';
import { Usuario } from '../pages/usuario';



function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/post" element={<Post/>} />
                <Route exact  path="/usuario" element={<Usuario />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;