import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';



function Logout({ id_residuo }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);

    const logout = () => {
        localStorage.removeItem('rol');
        localStorage.removeItem('token');
        location.reload()
    }


    // Configuración de la animación
    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };





    return (
        <>


            <ion-icon onClick={toggleModal} name="log-out-outline"></ion-icon>

            {/* Modal */}
            {isModalVisible && (
                <div className='fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 p-5'>
                        <animated.div style={modalAnimation} className='w-[800px] py-10 bg-white p-4 rounded shadow-md'>
                            <div className='w-full h-16 flex justify-center items-center mb-6'>
                                <h1 className='text-2xl font-normal text-gray-800'>¿Está seguro de que desea cerrar la sesión?</h1>
                            </div>

                            <div className='flex justify-end gap-2'>
                                <button
                                    onClick={toggleModal}
                                    className='bg-gray-300 text-gray-700 hover:bg-gray-400 px-5 flex items-center justify-center py-[6px] rounded'
                                >
                                    <span className='text-lg'>Cancelar</span>
                                </button>
                                <button
                                    onClick={logout}
                                    className='bg-red-500 hover:bg-red-600 text-white flex items-center justify-center px-2 rounded py-[6px]'
                                    autoFocus
                                >
                                    <span className="mr-2 text-lg">Cerrar sesión</span>
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </button>
                            </div>
                        </animated.div>
                    </div>
                </div>
            )}
        </>
    );
}



export default Logout