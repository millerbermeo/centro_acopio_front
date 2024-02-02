import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import axiosClient from '../axios-client';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import UserRegister from '../components/users/UserRegister';
import UserUpdate from '../components/users/UserUpdate';
import UserEstado from '../components/users/UserEstado';


function ActivityPage() {

    const [data, setData] = useState([]);
    const [tipos, setTipos] = useState([])
    const [border, setBorder] = useState('')

    const fetchData = async () => {
        try {
            const response = await axiosClient.get('usuario/listar_pasante');
            const sortedData = response.data.sort((a, b) => a.id_usuario - b.id_usuario);

            // const filteredData = sortedData.filter((row) =>
            //     row.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            // );

            console.log(sortedData)
            console.log("miller")

            setData(sortedData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        try {
            axiosClient.get('actividad/listar_tipos').then((response) => {
                setTipos(response.data)
                console.log("tipoos", response.data)
            }).catch((Error) => {
                console.log(Error)
            })
        } catch (error) {
            console.log("error del servidor", error)
        }
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault()
        alert()
    }

    const changeBorder = () => {
        setBorder(true)
    }


    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col relative overflow-auto'>
                    <div className='h-16'>
                        <Navbar titulo='ACTIVIDADES' />
                    </div>

                    <div className="p-8 w-full t-10 overflow-y-auto scroll">
                        <h1 className="mb-8">Page Actividades</h1>

                        <form onSubmit={handleSubmit} className="w-full flex gap-4 h-auto overflow-hidden overflow-x-auto rounded">

                            <div onClick={changeBorder} className={`w-[60%] flex flex-col items-center  bg-white overflow-y-scroll h-96  ${border ? 'bg-blue-100' : ''}`}>
                                <div className='w-full grid place-items-center py-3 mb-4 rounded-sm text-white text-xl font-light bg-blue-500'>
                                    Seleccionar Usuarios
                                </div>


                                <div className='grid grid-cols-3 gap-4 gap-x-28'>
                                    {data.map((user, index) => (
                                        <div key={index} className="flex gap-2 items-center">

                                            <input
                                                className="cursor-pointer"
                                                type="checkbox"
                                                id={`user-${user.id_usuario}`}
                                                value={user.id_usuario}
                                            />
                                            <label
                                                className="cursor-pointer break-all flex items-center justify-center"
                                                htmlFor={`user-${user.id_usuario}`}
                                            >
                                                {user.nombre} {user.apellidos}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-[50%] bg-gray-100 px-20 rounded flex justify-center">
                                <div className='bg-white p-10 rounded w-[450px] shadow-sm flex justify-start h-full flex-col'>
                                    <div className="mb-4">
                                        <label htmlFor="nombre" className="block text-gray-700 text-base mb-2">
                                            Tipo Actividad:
                                        </label>

                                        <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        >
                                            {tipos.map((tipos, index) => (
                                                <option key={index} name={tipos.id_tipo_actividad} id={tipos.nombre_actividad}>
                                                    {tipos.nombre_actividad}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="opcionSelect" className="block text-gray-700 text-base mb-2">
                                            Día:
                                        </label>
                                        <select
                                            id="opcionSelect"
                                            name="opcionSelect"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Seleccionar día...</option>
                                            <option value="lunes">Lunes</option>
                                            <option value="martes">Martes</option>
                                            <option value="miercoles">Miércoles</option>
                                            <option value="jueves">Jueves</option>
                                            <option value="viernes">Viernes</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fecha" className="block text-gray-700 text-base mb-2">
                                            Fecha:
                                        </label>
                                        <input
                                            type="date"
                                            id="fecha"
                                            name="fecha"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="opcionSelect2" className="block text-gray-700 text-base mb-2">
                                            Seleccionar:
                                        </label>
                                        <select
                                            id="opcionSelect2"
                                            name="opcionSelect2"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Seleccionar opción...</option>
                                            <option value="opcion1">Opción 1</option>
                                            <option value="opcion2">Opción 2</option>
                                            <option value="opcion3">Opción 3</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>


                        <div className='mt-20'>
                            <div className='w-full overflow-x-auto rounded h-auto shadow-xl shadow-gray-300'>
                                <table className='border-collapse min-w-full'>
                                    {/* <thead style={{ position: 'sticky', top: -1, zIndex: 1, background: '#fff' }}> */}
                                    <thead>
                                        <tr className='bg-[#38A800]/75 text-white'>
                                            <th className='py-2 px-4 font-normal border w-14'>Id</th>
                                            <th className='py-2 px-4 font-normal border w-48'>Nombre</th>
                                            <th className='py-2 px-4 font-normal border w-64'>Apellidos</th>
                                            <th className='py-2 px-4 font-normal border w-28'>Identificacion</th>
                                            <th className='py-2 px-4 font-normal border w-48'>Email</th>
                                            <th className='py-2 px-4 font-normal border w-28'>Rol</th>
                                            <th className='py-2 px-4 font-normal border w-36'>Estado</th>
                                            <th className='py-2 px-4 font-normal border w-52'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className={`${index % 2 === 0 ? 'bg-bray-100' : 'bg-gray-200'} border border-gray-300`}>
                                                <td className='px-4 text-center'>{row.id_usuario}</td>
                                                <td className='px-4 text-center'>{row.nombre}</td>
                                                <td className='px-4 text-center'>{row.apellidos}</td>
                                                <td className='px-4 text-center'>{row.identificacion}</td>
                                                <td className='px-4 text-center'>{row.email}</td>
                                                <td className='px-4 text-center'>{row.rol}</td>
                                                <td className='px-4 text-center'>{row.estado}</td>
                                                <td className='px-4 flex justify-center items-center gap-2 py-1'>
                                                    <UserUpdate id_usuario={row.id_usuario} />
                                                    <UserEstado id_usuario={row.id_usuario} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default ActivityPage