import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import axiosClient from '../../axios-client'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function UserUpdate({ id_usuario }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([])

    const nombre = useRef()
    const apellidos = useRef()
    const identificacion = useRef()
    const email = useRef()
    const password = useRef()
    const rol = useRef()
    const estado = useRef()

    // Configuración de la animación
    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response1 = await axiosClient.get(`usuario/listar_id/${id_usuario}`);
                setData(response1.data);
            } catch (error) {
                console.error('Error al obtener los datos', error);
            }
        };
    
        fetchData();
    }, [id_usuario]);
    





    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            const updatedData = {
                nombre: nombre.current.value,
                apellidos: apellidos.current.value,
                identificacion: identificacion.current.value,
                email: email.current.value,
                password: password.current.value,
                rol: rol.current.value,
                estado: estado.current.value,
            };
    
            showAlert('success', 'Operación exitosa');
    
            axiosClient.put(`usuario/actualizar/${id_usuario}`, updatedData)
    
            setModalVisible(false);
        } catch (error) {
            showAlert('error', 'Hubo un error en la operación');
        }
    }

    return (
        <>
            <button onClick={toggleModal} type="button" className="focus:outline-none h-9 text-white bg-green-600/80 hover:bg-green-800 font-medium rounded-lg text-sm px-5">Actualizar</button>
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
                                <form onSubmit={handleSubmit} className='w-[60%] flex flex-col justify-center items-start'>
                                    <h1 className='uppercase font-medium mb-5 text-center m-auto'>Registrar Usuario</h1>
                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                className="mt-1 p-2 w-[512px] border rounded-md"
                                                required
                                                ref={nombre}
                                                defaultValue={data[0].nombre}
                                            />
                                        </div>



                                    </div>
                                    <div className='flex gap-3 justify-start w-full'>
                                        <div className="mb-4">
                                            <label htmlFor="apellidos" className="block text-sm font-medium text-gray-600">
                                                Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                id="apellidos"
                                                name="apellidos"
                                                className="mt-1 p-2 w-[512px] border rounded-md"
                                                required
                                                ref={apellidos}
                                                defaultValue={data[0].apellidos}
                                            />
                                        </div>
                                    </div>


                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="identificacion" className="block text-sm font-medium text-gray-600">
                                                Identificacion
                                            </label>
                                            <input
                                                type="text"
                                                id="identificacion"
                                                name="identificacion"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                                ref={identificacion}
                                                defaultValue={data[0].identificacion}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                                ref={email}
                                                defaultValue={data[0].email}
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                                Password
                                            </label>
                                            <input
                                                type="text"
                                                id="password"
                                                name="password"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                                ref={password}
                                                defaultValue={data[0].password}
                                            />
                                        </div>


                                        <div className="mb-4">
                                            <label htmlFor="rol" className="block text-sm font-medium text-gray-600">
                                                Rol
                                            </label>
                                            <select name="rol" id="rol" className="mt-1 p-2 w-[250px] border rounded-md" ref={rol}  defaultValue={data[0].rol} >
                                                <option value="1">Administrador</option>
                                                <option value="2">Pasante</option>
                                                <option value="3">Invitado</option>
                                            </select>
                                        </div>


                                    </div>

                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="estado" className="block text-sm font-medium text-gray-600">
                                                Estado
                                            </label>
                                            <select
                                                name="estado"
                                                id="estado"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                ref={estado}  // Corregir ref={rol} por ref={estado}
                                                defaultValue={data[0].estado}  // Asignar el valor por defecto según los datos
                                            >
                                                <option selected disabled value="1">Select Estado</option>
                                                <option value="1">Activo</option>
                                                <option value="2">Inactivo</option>
                                            </select>
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


export default UserUpdate