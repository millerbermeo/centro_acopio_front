import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div className='w-full h-screen flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-9xl'>NotFound</h1>

                <Link to="/home">

                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Home
                    </button>
                </Link>
            </div>
        </>
    )
}

export default NotFound