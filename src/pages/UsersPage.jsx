import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import axiosClient from '../axios-client';
import UserEstado from '../components/users/UserEstado';
import UserRegister from '../components/users/UserRegister';
import UserUpdate from '../components/users/UserUpdate';
import UserDelete from '../components/users/UserDelete';


function UsersPage() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 12;

    const fetchData = async () => {
        try {
            const response = await axiosClient.get('usuario/listar');
            const sortedData = response.data.sort((a, b) => a.id_usuario  - b.id_usuario );

            const filteredData = sortedData.filter((row) =>
                row.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setData(filteredData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm]); // Fetch data when the search term changes

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
    };

    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col relative overflow-auto'>
                    <div className='h-16'>
                        <Navbar titulo='USUARIOS' />
                    </div>

                    <div className='p-8 w-full mt-10'>
                        <h1>Page Usuarios</h1>

                        {/* <div className='w-full px-2 overflow-x-auto rounded h-16 flex items-center justify-start bg-[#38A800]/75'>
                            <span className='text-xl text-white'>Usuarios</span>
                        </div> */}

                        <div className='flex gap-2 items-center h-auto'>
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type='search'
                                name=''
                                id=''
                                placeholder='Buscar...'
                                className='bg-white w-56 border border-green-600 focus:border-blue-600 rounded outline-none px-2 py-1 my-3'
                            />
                            <UserRegister />
                        </div>

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
                                    {currentData.map((row, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-bray-100' : 'bg-gray-200'} border border-gray-300`}>
                                            <td className='px-4 text-center'>{row.id_usuario}</td>
                                            <td className='px-4 text-center'>{row.nombre}</td>
                                            <td className='px-4 text-center'>{row.apellidos}</td>
                                            <td className='px-4 text-center'>{row.identificacion}</td>
                                            <td className='px-4 text-center'>{row.email}</td>
                                            <td className='px-4 text-center'>{row.rol}</td>
                                            <td className='px-4 text-center'>{row.estado}</td>
                                            <td className='px-4 flex justify-center items-center gap-2 py-1'>
                                                <UserUpdate id_usuario={row.id_usuario}/>
                                                <UserEstado id_usuario={row.id_usuario} />
                                                <UserDelete id={row.id_usuario}/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex justify-end pr-8'>
                        <button
                            type='button'
                            className='px-4 w-24 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-s-sm bg-gray-400 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700'
                            onClick={goToPreviousPage}
                        >
                            Atras
                        </button>

                        <button
                            type='button'
                            className='px-4 w-24 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-e-sm bg-green-600 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700'
                            onClick={goToNextPage}
                        >
                            Adelante
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UsersPage