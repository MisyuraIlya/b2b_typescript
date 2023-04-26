import React from 'react';
import '../../App.scss'
import './HeaderModule.styles.scss'
import { Container, useActions, useDarkMode } from './constructor';
import Iconsbar from './components/IconsBar/Iconsbar';
import Searchbar from './components/Searchbar/Searchbar';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { HeaderProvider } from './context/HeaderProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import HeaderCart from './components/HeaderCart/HeaderCart';
import HeaderProfile from './components/HeaderProfile/HeaderProfile';
import {CiDark,CiSun} from 'react-icons/ci'
import HeaderSearch from './components/HeaderSearch/HeaderSearch';

const HeaderModule = () => {
    const navigate = useNavigate()
    const {toggleMode} = useActions()
    const {darkMode} = useDarkMode()
    return (
        <div className='fixed z-50 w-full'>
        <header className='bg-bg-color dark:bg-secondary  bgAnimation  w-full py-6 px-6 grid grid-cols-3'
            
            // style={{
            //     gridTemplateColumns: '1fr 3fr 1.2fr'
            // }}
        >

            {/* <Search/> */}

            <Link to="/">
                {/* <img src="https://amit-pastry-b2b.com/src/img/logo.png" alt="logo" style={{width:'50px'}}/> */}
            </Link>
            <HeaderSearch/>
            <div className='flex items-center justify-center gap-10'>
                <Link to="/favorites" className='text-black dark:text-white'>
                    <AiOutlineHeart size={28} />
                </Link>
                <HeaderCart/>
                <HeaderProfile/>
                {!darkMode 
                ? <CiDark size={40} className='text-black' onClick={() => toggleMode()}/> 
                : <CiSun size={40} className='text-white' onClick={() => toggleMode()}/>
                }
                
            </div>
        {/* <HeaderProvider>
            <div className='HeaderModule'>
                <Container>
                    <div className='flex-container'>
                        <div className='col-lg-4 center'>
                            <Iconsbar/>
                        </div>
                        <div className='col-lg-4 center'>
                            <Searchbar/>
                        </div>
                        <div className='col-lg-4 center'>
                            <img src="https://amit-pastry-b2b.com/src/img/logo.png" alt="logo" style={{width:'45px'}} onClick={() => navigate('/')}/>
                        </div>  
                    </div>
                    <Navbar/>
                </Container>
                <Sidebar/>
            </div>
        </HeaderProvider> */}

        </header>
        <Navbar/>

        </div>


    );
};

export default HeaderModule;    