import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ModalWaste({id_residuo}) {
    const [isModalVisible, setModalVisible] = useState(false);

    // Configuración de la animación
    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
          <button onClick={toggleModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</button>
           {/* Modal */}
            {isModalVisible && (
                <div className='fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50'>
                        <animated.div style={modalAnimation} className='w-[900px] py-10 bg-white p-4 rounded shadow-md'>
                            <span onClick={toggleModal} className='text-4xl cursor-pointer absolute top-4 right-5 hover:text-blue-500'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </span>

                            <div className='flex justify-center items-start w-full'>
                            <div className='w-[40%] flex justify-center pt-5'>
                                    <img className='w-[85%]' src="mujerpng.png" alt="" />
                                </div>
                                <form className='w-[60%] flex flex-col justify-center items-start'>
                                    <h1 className='uppercase font-medium mb-5 text-center m-auto'>Editar de Residuo</h1>
                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="nombre_residuo" className="block text-sm font-medium text-gray-600">
                                                Nombre del Residuo
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre_residuo"
                                                name="nombre_residuo"
                                                className="mt-1 p-2 w-[512px] border rounded-md"
                                                required
                                            />
                                        </div>



                                    </div>
                                    <div className='flex gap-3 justify-start w-full'>
                                        <div className="mb-4">
                                            <label htmlFor="tipo_residuo" className="block text-sm font-medium text-gray-600">
                                                Tipo de Residuo
                                            </label>
                                            <select
                                                id="tipo_residuo"
                                                name="tipo_residuo"
                                                className="mt-1 p-2 w-[512px] border rounded-md"
                                                required
                                            >
                                                <option value="" disabled>
                                                    Seleccionar tipo de residuo
                                                </option>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-600">
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                id="cantidad"
                                                name="cantidad"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="unidad_medida" className="block text-sm font-medium text-gray-600">
                                                Unidad de Medida
                                            </label>
                                            <input
                                                type="text"
                                                id="unidad_medida"
                                                name="unidad_medida"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="fk_alm" className="block text-sm font-medium text-gray-600">
                                                FK Alm
                                            </label>
                                            <select
                                                id="fk_alm"
                                                name="fk_alm"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                            >
                                                <option value="" disabled>
                                                    Seleccionar FK Alm
                                                </option>
                                                <option value="almacen1">Almacén 1</option>
                                                <option value="almacen2">Almacén 2</option>
                                            </select>
                                        </div>


                                        <div className="mb-4">
                                            <label htmlFor="fk_actividad" className="block text-sm font-medium text-gray-600">
                                                FK Actividad
                                            </label>
                                            <input
                                                type="text"
                                                id="fk_actividad"
                                                name="fk_actividad"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-6 flex w-full h-10">

                                        <button
                                            type="submit"
                                            className="px-4 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                                        >
                                            Actualizar
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


export default ModalWaste