import React from 'react'
import Logout from './Logout'
import Notifications from './Notifications';

function Navbar({ titulo }) {

    const userNombre = localStorage.getItem('nombre')
    const userRol = localStorage.getItem('rol')
    let textoModificado = userRol.slice(1);

    let letraAgregar = "A";

    textoModificado = letraAgregar.concat(textoModificado);
    

    return (
        <>
            <div className='w-full flex fixed md:sticky lg:z-20  right-0 justify-center lg:justify-between items-center h-16 bg-white shadow-lg shadow-[#38a8001b] px-5'>
                <div className='lg:flex hidden items-center gap-10'>

                    <div className='flex z-10 items-center relative justify-center'>

                        <img src="logouser.avif" alt="" className='w-14 h-14 rounded-full' />
                        <div className='flex flex-col justify-end gap-y-0'>
                            <span className='uppercase font-bold'>
                                {userNombre}
                            </span>
                            <span className='text-gray-500'>
                                {textoModificado}
                            </span>
                        </div>
                    </div>
                    {/* <div className='w-96 flex z-10 items-center relative justify-center'>

                        <input
                            placeholder='Buscar...'
                            type="search"
                            name=""
                            id=""
                            className='w-full p-1 pl-10 border bg-gray-50 rounded-md focus:outline-none focus:border-blue-500'
                        />
                        <span className='text-[30px] absolute left-[2px] mt-2 text-gray-500'>
                            <ion-icon name="search-circle-outline"></ion-icon>
                        </span>
                    </div> */}







                </div>

                <div className='font-extrabold w-44 text-2xl text-gray-600 hidden md:flex'>
                    <span>{titulo}</span>
                </div>


                <div className='flex items-center justify-center gap-2'>
                    <span className='text-3xl cursor-pointer hover:text-green-700'>
                        <ion-icon name="alert-circle-outline"></ion-icon>
                    </span>
                    <span className='text-3xl relative'>
                        <Notifications/>
                    </span>
                    <span className='text-3xl cursor-pointer hover:text-green-700'>
                        <Logout />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar
