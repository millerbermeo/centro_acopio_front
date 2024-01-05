import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div className='bg-gray-100 w-full h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col overflow-auto'>
                    <div className='h-16'>
                        <Navbar />
                    </div>

                    <div className='p-8 border w-full' style={{ height: 'calc(100vh - 16px)' }}>

                        <div className='flex justify-center items-center gap-5'>
                            <div className='w-full h-44 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'></div>
                            <div className='w-full h-44 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'></div>
                            <div className='w-full h-44 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'></div>
                        </div>

                        <div className='flex justify-center mt-8 items-start gap-5'>
                            <div className='w-[60%] h-80 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'></div>
                            <div className='w-[40%] h-80 bg-white border-[1px] border-gray-300 overflow-hidden rounded shadow-sm'>
                                <div className='w-full h-48 bg-blue-400'>
                                </div>

                                <div>
                                    miller
                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
