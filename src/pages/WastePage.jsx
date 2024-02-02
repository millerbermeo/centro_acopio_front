import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ModalInput from '../components/wastes/ModalInput';
import ModalWaste from '../components/wastes/ModalWaste';
import ModalExit from '../components/wastes/ModalExit';
import axiosClient from '../axios-client';

function WastePage() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 13;

    const fetchData = async () => {
        try {
            const response = await axiosClient.get('residuo/listar');
            const sortedData = response.data.sort((a, b) => a.id_residuo - b.id_residuo);

            const filteredData = sortedData.filter((row) =>
            row.nombre_residuo.toLowerCase().includes(searchTerm.toLowerCase())
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
                        <Navbar titulo='RESIDUOS' />
                    </div>

                    <div className='p-8 w-full mt-10'>
                        <h1>Page Residuos</h1>

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
                            <ModalInput />
                        </div>

                        <div className='w-full overflow-x-auto rounded h-auto shadow-xl shadow-gray-300'>
                            <table className='border-collapse min-w-full'>
                            {/* <thead style={{ position: 'sticky', top: -1, zIndex: 1, background: '#fff' }}> */}
                                <thead>
                                    <tr className='bg-[#38A800]/75 text-white'>
                                        <th className='py-2 px-4 font-normal border w-14'>Id</th>
                                        <th className='py-2 px-4 font-normal border w-64'>Nombre</th>
                                        <th className='py-2 px-4 font-normal border w-64'>Tipo</th>
                                        <th className='py-2 px-4 font-normal border w-28'>Cantidad</th>
                                        <th className='py-2 px-4 font-normal border w-28'>Unidad</th>
                                        <th className='py-2 px-4 font-normal border w-52'>Bodega</th>
                                        <th className='py-2 px-4 font-normal border w-52'>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((row, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-bray-100' : 'bg-gray-200'} border border-gray-300`}>
                                            <td className='px-4 text-center'>{row.id_residuo}</td>
                                            <td className='px-4 text-center'>{row.nombre_residuo}</td>
                                            <td className='px-4 text-center'>{row.tipo_residuo}</td>
                                            <td className='px-4 text-center'>{row.cantidad}</td>
                                            <td className='px-4 text-center'>{row.unidad_medida}</td>
                                            <td className='px-4 text-center'>{row.nombre_almacenamiento}</td>
                                            <td className='px-4 flex justify-center items-center gap-2 py-1'>
                                                <ModalWaste id_residuo={row.id_residuo}/>
                                                <ModalExit id_residuo={row.id_residuo} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex justify-center gap-2 md:justify-end md:pr-8'>
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
    );
}

export default WastePage;
