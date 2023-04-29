import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import CartPage from '@pages/CartPage/CartPage';
import PostPage from '@pages/PostPage/PostPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import Header from './components/layout/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { HeaderModule } from './modules/HeaderModule';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DocumentsPage from './pages/DocumentsPage/DocumentsPage';
const RouterApp = () => {
    return (
        <div>
            {/* <Header/> */}
            <HeaderModule/>
            {/* <AuthPage/> */}
            {/* <Link to="/" data-testid="home-link">Home</Link>
            <Link to="/auth" data-testid="cart-link">auth</Link>
            <Link to="/post" data-testid="post-link">Post</Link>
            <Link to="/login" data-testid="cart-link">Login</Link>
            <Link to="/registration" data-testid="post-link">Registration</Link>
            <Link to="/catalog" data-testid="post-link">Catalog</Link> */}
            <main style={{paddingTop:'130px'}}>
                <Routes>
                    <Route>
                        <Route path="/" element={<HomePage/>} />
                        <Route path='/auth' element={<AuthPage/>}/>
                        <Route path="/catalog/:level1/:level2/:level3" element={<CatalogPage/>}/>
                        <Route path='/profile' element={<ProfilePage/>}/>
                        <Route path='/documents/:docs' element={<DocumentsPage/>}/>
                        <Route path='/cart' element={<CartPage/>}/>
                        {/* <Route path='/login' element={<LoginPage/>}/> */}
                        <Route path='/registration' element={<RegistrationPage/>}/>
                        <Route path='/*' element={<ErrorPage/>}/>

                    </Route>
                </Routes>
            </main>
        </div>
    );
};

export default RouterApp;