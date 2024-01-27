import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import axiosClient from '../axios-client';
import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


function MovementsPage() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [movementType, setMovementType] = useState('all'); // Estado para el tipo de movimiento


    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };


    const itemsPerPage = 16; // Número de elementos por página

    const fetchData = async (data) => {

        try {
            const response = await axiosClient.post('residuo/movimientos', data);

            console.log(response.data)
            const sortedData = response.data.sort((a, b) => a.id_movimiento - b.id_movimiento);

            // Filtrar datos por nombre_residuo y tipo de movimiento
            const filteredData = sortedData.filter((row) => {
                const searchTermMatch = !searchTerm || row.nombre_residuo.toLowerCase().includes(searchTerm.toLowerCase());
                const typeMatch = movementType === 'all' || row.tipo_movimiento === movementType;
                return searchTermMatch && typeMatch;
            });

            setData(filteredData);
        } catch (error) {
            showAlert('error', 'No hay Registros con esa Fecha');
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, movementType]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    const handleMovementTypeChange = (type) => {
        setMovementType(type);
        fetchData()
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        setSearchTerm('');
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
        setSearchTerm('');
    };

    const mes = useRef()
    const year = useRef()
    const tipo_mov = useRef()


    const filtrarMesYear = (event) => {

        event.preventDefault()
        // alert()
        const data = {
            mes: mes.current.value,
            year: year.current.value,
            movimiento: tipo_mov.current.value
        }

        // console.log(data)

        fetchData(data)

    }


    const meses = [
        { mes: 'Enero', valor: 1 },
        { mes: 'Febrero', valor: 2 },
        { mes: 'Marzo', valor: 3 },
        { mes: 'Abril', valor: 4 },
        { mes: 'Mayo', valor: 5 },
        { mes: 'Junio', valor: 6 },
        { mes: 'Julio', valor: 7 },
        { mes: 'Agosto', valor: 8 },
        { mes: 'Septiembre', valor: 9 },
        { mes: 'Octubre', valor: 10 },
        { mes: 'Noviembre', valor: 11 },
        { mes: 'Diciembre', valor: 12 },
    ];

    const anios = [
        { anio: 2023, valor: 2023 },
        { anio: 2024, valor: 2024 },
    ];

    const movimiento = [
        { mov: 'Todos', valor: 'todos' },
        { mov: 'Entrada', valor: 'entrada' },
        { mov: 'Salida', valor: 'salida' },
    ];

    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col overflow-auto'>
                    <div className='h-16'>
                        <Navbar titulo="MOVIMIENTOS" />
                    </div>

                    <div className='p-8 w-full mt-10'>

                        {/* //Contenido va aqui */}

                        <h1>Page Movimientos</h1>

                        <div className='flex gap-2 flex-wrap items-center justify-between h-auto'>
                            <div className='flex gap-2 flex-wrap items-center'>
                                <input
                                    type="search"
                                    name=""
                                    id=""
                                    placeholder="Buscar..."
                                    className="bg-white md:w-56 border flex w-full border-green-600 focus:border-blue-600 rounded outline-none px-2 py-1 my-3"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                              <div className='flex gap-2 justify-center w-full md:w-auto'>
                              <button
                                    type="button"
                                    className={`focus:outline-none flex justify-center items-center w-full md:w-auto h-9 text-white bg-green-600/80 hover:bg-green-800 font-medium rounded-lg text-sm px-5 ${movementType === 'all' ? 'bg-green-800' : ''}`}
                                    onClick={() => handleMovementTypeChange('all')}
                                >
                                    Todos
                                </button>

                                <button
                                    type="button"
                                    className={`focus:outline-none flex justify-center items-center w-full md:w-auto h-9 text-white bg-green-600/80 hover:bg-green-800 font-medium rounded-lg text-sm px-5 ${movementType === 'entrada' ? 'bg-green-800' : ''}`}
                                    onClick={() => handleMovementTypeChange('entrada')}
                                >
                                    Entrada
                                </button>
                                <button
                                    type="button"
                                    className={`focus:outline-none flex justify-center items-center w-full md:w-auto h-9 text-white bg-green-600/80 hover:bg-green-800 font-medium rounded-lg text-sm px-5 ${movementType === 'salida' ? 'bg-green-800' : ''}`}
                                    onClick={() => handleMovementTypeChange('salida')}
                                >
                                    Salida
                                </button>
                              </div>
                            </div>


                            {/* AQUI VA CONTENIDO */}
                            <div className='flex gap-2 w-full md:w-auto flex-wrap md:flex-nowrap justify-center mb-6'>
                                <div className='w-full'>
                                    <select className="p-2 flex w-full md:w-auto" ref={mes}>
                                        {meses.map((mes) => (
                                            <option key={mes.valor} value={mes.valor}>
                                                {`${mes.mes}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='w-full'>
                                    <select className="p-2 flex w-full md:w-auto" ref={year}>
                                        {anios.map((anio) => (
                                            <option key={anio.valor} value={anio.valor}>
                                                {`${anio.anio}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='w-full'>
                                    <select className="p-2 flex w-full md:w-auto" ref={tipo_mov}>
                                        {movimiento.map((mov) => (
                                            <option key={mov.valor} value={mov.valor}>
                                                {`${mov.mov}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='w-full md:w-auto flex justify-center items-center'>
                                    <button onClick={filtrarMesYear} className='bg-blue-500 text-white p-2 rounded-md flex justify-center items-center w-full md:w-auto'>Filtrar</button>
                                </div>
                            </div>
                        </div>

                        <div className='w-full overflow-x-auto rounded h-auto shadow-xl shadow-gray-300'>
                            <table className='border-collapse min-w-full'>
                                {/* <thead style={{ position: 'sticky', top: -1, zIndex: 1, background: '#fff' }}> */}
                                <thead>
                                    {/* <tr className='bg-gray-300 text-gray-600'> */}
                                    <tr className='bg-[#38A800]/75 text-white'>
                                        <th className='py-2 px-4 font-normal border w-14'>Id</th>
                                        <th className='py-2 px-4 font-normal border w-60'>Residuo</th>
                                        <th className='py-2 px-4 font-normal border w-24'>tipo_movimiento</th>
                                        <th className='py-2 px-4 font-normal border w-20'>cantidad</th>
                                        <th className='py-2 px-4 font-normal border w-20'>unidad</th>
                                        <th className='py-2 px-4 font-normal border w-72'>fecha</th>
                                        <th className='py-2 px-4 font-normal border w-72'>Actividad</th>
                                        <th className='py-2 px-4 font-normal border w-52'>Usuario</th>
                                        {/* Agrega más encabezados según sea necesario */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((row, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-bray-100' : 'bg-gray-200'} border border-gray-300`}>
                                            <td className='px-4 py-[6px] text-center'>{row.id_movimiento}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.nombre_residuo}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.tipo_movimiento}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.cantidad}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.unidad_medida}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.fecha}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.nombre_actividad}</td>
                                            <td className='px-4 py-[6px] text-center'>{row.usuario_adm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="flex gap-2 justify-center md:justify-end md:pr-10">
                        <button
                            type="button"
                            className="px-4 w-24 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-s-lg bg-gray-900 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={goToPreviousPage}
                        >
                            Atras
                        </button>

                        <button
                            type="button"
                            className="px-4 w-24 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-e-lg bg-gray-900 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
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


export default MovementsPage
