import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`w-[300px] lg:relative z-20 fixed lg:left-0 h-screen border-r border-white transition-transform duration-500 lg:translate-x-0 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-[300px]'}`} style={{ backgroundImage: 'url("fondo2.jpg")', backgroundSize: 'cover', backgroundColor: 'rgba(0, 128, 0, 0.6)' }}>
                <div className='lg:hidden absolute -right-10 top-5 text-3xl' onClick={toggleMenu}>
                <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className='bg-[#38A800]/75 h-screen'>
                    <div className='w-full h-16 flex items-center justify-center border-b px-3 border-white font-medium text-lg'>
                        <span className='uppercase text-white'>Centro de Acopio</span>
                    </div>

                    <div className='mt-5 uppercase px-3 font-semibold cursor-pointer'>
                        <ul>
                            <Link to="/">
                            <li className='w-full text-white text-[25px] bg-green-600/80 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="home-outline"></ion-icon><span className='text-xs text-white'>Dashboard</span></li>
                            </Link>
                            <Link to="/residuos">
                            <li className='w-full text-white text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="trash-bin-outline"></ion-icon><span className='text-xs text-white'>Residuos</span></li>
                            </Link>
                            <Link to="/movimientos">
                            <li className='w-full text-white text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="bag-remove-outline"></ion-icon><span className='text-xs text-white'>Movimientos</span></li>
                            </Link>
                            <li className='w-full text-white text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="people-circle-outline"></ion-icon><span className='text-xs text-white'>Usuarios</span></li>
                            <li className='w-full text-white text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="expand-outline"></ion-icon><span className='text-xs text-white'>Actividades</span></li>
                            <li className='w-full text-white text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="albums-outline"></ion-icon><span className='text-xs text-white'>Elementos</span></li>
                        </ul>
                    </div>

                    <div className='mt-10 px-3 uppercase'>
                        <ul>
                            <li className='w-full bg-green-600/80 h-11 items-center px-5 flex gap-4 rounded-sm'><i className="fa-solid fa-house text-white"></i><span className='text-xs text-white'>Dashboard</span></li>
                        </ul>
                    </div>

                    <div>
                        <img src="logo.png" alt="" className='w-[50%] m-auto mt-8' />
                    </div>

                    <div className='absolute bottom-2 left-0 right-0 text-center uppercase text-white text-sm border-b '>
                        <span>
                            Miller Dev
                        </span>
                    </div>
                </div>

            </nav>



        </>
    )
}

export default Sidebar
