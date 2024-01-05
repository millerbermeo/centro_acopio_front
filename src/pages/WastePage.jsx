import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ModalInput from '../components/wastes/ModalInput'
import ModalWaste from '../components/wastes/ModalWaste'
import ModalExit from '../components/wastes/ModalExit'

function WastePage() {
    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col overflow-auto'>
                    <div className='h-16'>
                        <Navbar />
                    </div>

                    <div className='p-8 border w-full' style={{ height: 'calc(100vh - 16px)' }}>

                        {/* //Contenido va aqui */}

                        <h1>Page Residuos</h1>

                        <div className='flex gap-2 items-center h-auto'>
                            <input type="search" name="" id="" placeholder='Buscar...' className='bg-white w-56 border border-green-600 focus:border-blue-600 rounded outline-none px-2 py-1 my-3' />
                            <ModalInput />
                        </div>

                        <div className='w-full overflow-x-auto rounded'>
                            <table className='border-collapse min-w-full'>
                                <thead>
                                    <tr className='bg-gray-300 text-gray-600'>
                                        <th className='py-2 px-4 font-normal border'>Id</th>
                                        <th className='py-2 px-4 font-normal border'>Nombre</th>
                                        <th className='py-2 px-4 font-normal border'>Tipo</th>
                                        <th className='py-2 px-4 font-normal border'>Cantidad</th>
                                        <th className='py-2 px-4 font-normal border'>Unidad</th>
                                        <th className='py-2 px-4 font-normal border'>Bodega</th>
                                        <th className='py-2 px-4 font-normal border'>Acciones</th>
                                        {/* Agrega más encabezados según sea necesario */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-gray-100'>
                                        <td className='px-4 text-center'>1</td>
                                        <td className='px-4 text-center'>Carton</td>
                                        <td className='px-4 text-center'>Aprovechable</td>
                                        <td className='px-4 text-center'>40</td>
                                        <td className='px-4 text-center'>Kg</td>
                                        <td className='px-4 text-center'>1</td>
                                        <td className='px-4 flex justify-center items-center gap-2 py-1'>
                                            <ModalWaste />
                                            <ModalExit />
                                        </td>
                                        {/* Agrega más datos según sea necesario */}
                                    </tr>
                                    <tr className='bg-gray-200'>
                                        <td className='px-4 text-center'>2</td>
                                        <td className='px-4 text-center'>Vidrio</td>
                                        <td className='px-4 text-center'>Aprovechable</td>
                                        <td className='px-4 text-center'>20</td>
                                        <td className='px-4 text-center'>Kg</td>
                                        <td className='px-4 text-center'>2</td>
                                        <td className='px-4 flex justify-center items-cente gap-2 py-1'>
                                            <ModalWaste />
                                            <ModalExit />
                                        </td>
                                        {/* Agrega más datos según sea necesario */}
                                    </tr>

                                    {/* Agrega más filas según sea necesario */}
                                </tbody>
                            </table>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default WastePage
