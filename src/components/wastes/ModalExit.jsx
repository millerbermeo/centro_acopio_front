import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import axiosClient from '../../axios-client'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function ModalExit({ id_residuo }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);


    const cantidad = useRef();
    const usuario = useRef();

    // Configuración de la animación
    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    //Esta peticion me trae las administradores
    const fetchData = async () => {
        try {
            const response = await axiosClient.get('usuario/listar_admin');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {
            cantidad: cantidad.current.value,
            usuario: usuario.current.value
        };
    
        axiosClient.post(`residuo/salida/${id_residuo}`, data)
            .then(response => {
                console.log('Respuesta del servidor', response.data);
                showAlert('success', 'Operación exitosa');
                setModalVisible(false);
            })
            .catch(error => {
                console.log('Respuesta error del servidor', error);
    
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data.message;
    
                    if (errorMessage.includes("La cantidad de salida es mayor que la cantidad del residuo")) {
                        showAlert('error', errorMessage);
                    } else {
                        // Handle other 400 errors or show a generic alert
                        showAlert('error', 'Something went wrong.');
                    }
                } else {
                    // Handle non-400 errors or show a generic alert
                    showAlert('error', 'Something went wrong.');
                }
            });
    };
    


    return (
        <>

            <button onClick={toggleModal} type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:focus:ring-yellow-900">Salida</button>


            {/* Modal */}
            {isModalVisible && (
                <div className='fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50'>
                        <animated.div style={modalAnimation} className='w-[800px] py-10 bg-white p-4 rounded shadow-md'>
                            <span onClick={toggleModal} className='text-4xl cursor-pointer absolute top-4 right-5 hover:text-blue-500'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </span>

                            <div className='flex justify-center items-end w-full'>
                                <div className='w-[40%]'>
                                    <img className='' src="mujer.avif" alt="" />
                                </div>
                                <form onSubmit={handleSubmit} className='w-[60%] flex flex-col justify-center items-start'>
                                    <h1 className='uppercase font-medium mb-5 m-auto'>Salida de Residuo</h1>
                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-600">
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                id="cantidad"
                                                name="cantidad"
                                                className="mt-1 p-2 w-[460px] border border-blue-500 rounded-md"
                                                required
                                                ref={cantidad}
                                            />
                                        </div>



                                    </div>

                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="tipo_residuo" className="block text-sm font-medium text-gray-600">
                                                Usuario Administrador
                                            </label>
                                            <select
                                                id="tipo_residuo"
                                                name="tipo_residuo"
                                                className="mt-1 p-2 w-[460px] border rounded-md"
                                                required
                                                ref={usuario}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar el admin
                                                </option>
                                                {data.map((admin) => (
                                                    <option key={admin.id_usuario} value={admin.id_usuario}>
                                                        {admin.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex w-full h-10">

                                        <button
                                            type="submit"
                                            className="px-4 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                                        >
                                            Salida
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </animated.div>
                    </div>
                </div>
            )}
        </>
    );
}



export default ModalExit
