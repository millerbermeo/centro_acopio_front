import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para cerrar el sidebar cuando se hace clic en un enlace
    const closeSidebar = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={`w-[300px] lg:relative z-20 fixed lg:left-0 h-screen border-r border-white transition-transform duration-500 lg:translate-x-0 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-[300px]'}`} style={{ backgroundImage: 'url("fondo2.jpg")', backgroundSize: 'cover', backgroundColor: 'rgba(0, 128, 0, 0.6)' }}>
                <div className='lg:hidden absolute -right-10 top-5 text-3xl' onClick={toggleMenu}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className='bg-[#38A800]/75 h-screen'>
                    <div className='absolute w-full h-full bg-black opacity-30 -z-10'></div>
                    <div className='w-full h-16 flex items-center justify-center border-b px-3 border-white font-medium text-lg'>
                        <span className='uppercase text-gray-200 text-xl scale-110 font-black'>Centro de Acopio</span>
                    </div>

                    <div className='mt-5 uppercase px-3 font-semibold cursor-pointer'>
                        <ul>
                            <Link to="/home" onClick={closeSidebar}> {/* Agregar onClick para cerrar el sidebar */}
                                <li className='w-full text-gray-200 text-[25px] bg-green-600/80 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="home-outline"></ion-icon><span className='text-xs text-gray-200'>Dashboard</span></li>
                            </Link>
                            <Link to="/residuos" onClick={closeSidebar}> {/* Agregar onClick para cerrar el sidebar */}
                                <li className='w-full text-gray-200 text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="trash-bin-outline"></ion-icon><span className='text-xs text-gray-200'>Residuos</span></li>
                            </Link>
                            <Link to="/movimientos" onClick={closeSidebar}> {/* Agregar onClick para cerrar el sidebar */}
                                <li className='w-full text-gray-200 text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="bag-remove-outline"></ion-icon><span className='text-xs text-gray-200'>Movimientos</span></li>
                            </Link>
                            <Link to="/usuarios" onClick={closeSidebar}> {/* Agregar onClick para cerrar el sidebar */}
                                <li className='w-full text-gray-200 text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="people-circle-outline"></ion-icon><span className='text-xs text-gray-200'>Usuarios</span></li>
                            </Link>
                            <Link to="/actividades" onClick={closeSidebar}> {/* Agregar onClick para cerrar el sidebar */}
                                <li className='w-full text-gray-200 text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="expand-outline"></ion-icon><span className='text-xs text-gray-200'>Actividades</span></li>
                            </Link>
                            <li className='w-full text-gray-200 text-[25px] hover:bg-white/30 h-11 items-center px-5 flex gap-4 rounded-sm'><ion-icon name="albums-outline"></ion-icon><span className='text-xs text-gray-200'>Elementos</span></li>
                        </ul>
                    </div>

                    <div>
                        <img src="logo.png" alt="" className='w-[50%] absolute bottom-20 left-16 m-auto mt-8' />
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

export default Sidebar;
