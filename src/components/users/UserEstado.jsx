import React, {useState} from 'react'
import axiosClient from '../../axios-client';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useSpring, animated } from 'react-spring';

function UserEstado({ id_usuario }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSubmit = async () => {
        try {
            // Realiza la petición Axios
            const response = await axiosClient.put(`usuario/estado/${id_usuario}`);
            console.log(response.data);

            // Llama a showAlert en caso de éxito
            showAlert('success', 'Operación exitosa');
            setModalVisible(false);

        } catch (error) {
            // Llama a showAlert en caso de error
            showAlert('error', 'Hubo un error en la operación');
            setModalVisible(false);
        }
    }

    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };

    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <>
            <button
               onClick={toggleModal}
                type="submit"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Desactivar
            </button>

            {isModalVisible && (
                <div className='fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 p-5'>
                        <animated.div style={modalAnimation} className='w-[800px] py-10 bg-white p-4 rounded shadow-md'>
                            <div className='w-full h-16 flex justify-center items-center mb-6'>
                                <h1 className='text-2xl font-normal text-gray-800'>¿Está seguro que desea desactivar el usuario?</h1>
                            </div>

                            <div className='flex justify-end gap-2'>
                                <button
                                    onClick={toggleModal}
                                    className='bg-gray-300 text-gray-700 hover:bg-gray-400 px-5 flex items-center justify-center py-[6px] rounded'
                                >
                                    <span className='text-lg'>Cancelar</span>
                                </button>
                                <button
                                     onClick={handleSubmit}
                                    className='bg-red-500 hover:bg-red-600 text-white flex items-center justify-center px-2 rounded py-[6px]'
                                    autoFocus
                                >
                                    <span className="mr-2 text-lg">Desactivar</span>
                                    {/* <ion-icon name="log-out-outline"></ion-icon> */}
                                </button>
                            </div>
                        </animated.div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserEstado;
