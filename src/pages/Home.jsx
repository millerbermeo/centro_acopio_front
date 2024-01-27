import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import GraficoListarTipos from '../components/wastes/GraficoListarTipos'
import GraficoListarAlm from '../components/wastes/GraficoListarAlm'
import GraficoListarMov from '../components/wastes/GraficoListarMov'
import GraficoListarAlm2 from '../components/wastes/GraficoListarAlm2'
import GraficoListarAlm3 from '../components/wastes/GraficoListarAlm3'
import GraficoListarAlm4 from '../components/wastes/GraficoListarAlm4'

function Home() {
    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col overflow-auto'>
                    <div className='h-16'>
                        <Navbar titulo="DASHBOARD" />
                    </div>

                    <div className='p-8 border w-full overflow-y-auto' style={{ height: 'calc(100vh - 16px)' }}>

                        <div className='flex justify-center items-center gap-5'>
                            <div className='w-full h-72 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarAlm />
                            </div>
                            <div className='w-full h-72 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarAlm2 />
                            </div>
                            <div className='w-full h-72 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarAlm3 />
                            </div>
                        </div>

                        <div className='flex justify-center mt-8 items-start gap-5'>
                            <div className='w-[60%] h-auto bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarTipos />
                            </div>
                            <div className='w-[40%] h-auto bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarAlm4 />
                            </div>

                        </div>

                        <div className='flex justify-center mt-8 items-start gap-5'>
                            <div className='w-[60%] h-auto bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarMov />
                            </div>
                            <div className='w-[40%] h-auto bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <GraficoListarAlm />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
