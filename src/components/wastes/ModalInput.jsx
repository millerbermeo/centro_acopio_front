import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import axiosClient from '../../axios-client'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function ModalInput() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const nombre_residuo = useRef();
    const tipo_residuo = useRef();
    const cantidad = useRef();
    const unidad_medida = useRef();
    const usuario = useRef();
    const fk_alm = useRef();
    const fk_actividad = useRef();

    //variables para obtener los datos del formulario


    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };

    // Configuración de la animación
    const modalAnimation = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    //Esta peticion me trae los tipos de residuos
    const fetchData = async () => {
        try {
            const response = await axiosClient.get('residuo/tipos_residuos');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    //Esta peticion me trae los almacenamientos
    const fetchData2 = async () => {
        try {
            const response = await axiosClient.get('residuo/almacenamiento');
            setData2(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData2();
    }, []);


    //Esta peticion me trae las actividades
    const fetchData3 = async () => {
        try {
            const response = await axiosClient.get('residuo/actividades');
            setData3(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData3();
    }, []);


    //Esta peticion me trae las administradores
    const fetchData4 = async () => {
        try {
            const response = await axiosClient.get('usuario/listar_admin');
            setData4(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData4();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            const data = {
                nombre_residuo: nombre_residuo.current.value.toLowerCase(),
                tipo_residuo: tipo_residuo.current.value,
                cantidad: cantidad.current.value,
                unidad_medida: unidad_medida.current.value,
                usuario: usuario.current.value,
                fk_alm: fk_alm.current.value,
                fk_actividad: fk_actividad.current.value
            }
    
            axiosClient.post('residuo/registrar', data).then(response=> {
                console.log('Respuesta del servidor', response.data)
                setModalVisible(false);
                showAlert('success', 'Operación exitosa');
            }).catch((error)=>{
                showAlert('error', 'Hubo un error en la operación');
                console.log(error)
            })

        } catch (error) {
            showAlert('error', 'Hubo un error en la operación');
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={toggleModal} type="button" className="focus:outline-none h-9 text-white bg-green-600/80 hover:bg-green-800 font-medium rounded-lg text-sm px-5">
                Entrada
            </button>

            {/* Modal */}
            {isModalVisible && (
                <div className='fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50'>
                        <animated.div style={modalAnimation} className='w-[900px] py-10 bg-white p-4 rounded shadow-md'>
                            <span onClick={toggleModal} className='text-4xl cursor-pointer absolute top-4 right-5 hover:text-blue-500'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </span>

                            <div className='flex justify-start items-start w-full'>
                                <div className='w-[40%] pt-10 flex justify-center pt-5'>
                                    <img className='w-[90%]' src="mujerpng.png" alt="" />
                                </div>
                                <form onSubmit={handleSubmit} className='w-[60%] flex flex-col justify-center items-start'>
                                    <h1 className='uppercase font-medium mb-5 text-center m-auto'>Entrada de Residuo</h1>
                                    <div className='flex gap-3'>
                                        <div className="mb-4">
                                            <label htmlFor="nombre_residuo" className="block text-sm font-medium text-gray-600">
                                                Nombre del Residuo
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre_residuo"
                                                name="nombre_residuo"
                                                className="mt-1 p-2 w-[510px] border rounded-md"
                                                required
                                                ref={nombre_residuo}
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
                                                className="mt-1 p-2 w-[510px] border rounded-md"
                                                required
                                                ref={tipo_residuo}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar tipo de residuo
                                                </option>
                                                {data.map((tipoResiduo) => (
                                                    <option key={tipoResiduo.id_tipo} value={tipoResiduo.id_tipo}>
                                                        {tipoResiduo.tipo_residuo}
                                                    </option>
                                                ))}
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
                                                ref={cantidad}
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
                                                ref={unidad_medida}
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-3 justify-start w-full'>
                                        <div className="mb-4">
                                            <label htmlFor="usuario" className="block text-sm font-medium text-gray-600">
                                                Usuario Administrador
                                            </label>
                                            <select
                                                id="usuario"
                                                name="usuario"
                                                className="mt-1 p-2 w-[510px] border rounded-md"
                                                required
                                                ref={usuario}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar el admin
                                                </option>
                                                {data4.map((admin) => (
                                                    <option key={admin.id_usuario} value={admin.nombre}>
                                                        {admin.nombre}
                                                    </option>
                                                ))}
                                            </select>
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
                                                ref={fk_alm}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Almacenamiento
                                                </option>
                                                {data2.map((alm) => (
                                                    <option key={alm.id_almacenamiento} value={alm.id_almacenamiento}>
                                                        {alm.nombre_alm}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="fk_alm" className="block text-sm font-medium text-gray-600">
                                                FK Actividad
                                            </label>
                                            <select
                                                id="fk_alm"
                                                name="fk_alm"
                                                className="mt-1 p-2 w-[250px] border rounded-md"
                                                required
                                                ref={fk_actividad}

                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Actividad
                                                </option>
                                                {data3.map((actividad) => (
                                                    <option key={actividad.id_actividad} value={actividad.id_actividad}>
                                                        {actividad.nombre_actividad}
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
                                            Registrar
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

export default ModalInput;
