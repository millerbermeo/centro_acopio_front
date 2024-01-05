import React from 'react'

function Login() {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-[50%] h-screen flex justify-end items-center bg-gray-300'>
                    <div className="w-2/3 h-4/5 p-10 overflow-hidden bg-gray-100 flex flex-col justify-center items-center space-y-4">
                        <div>
                            <img src="animada.png" alt="" className="w-[100px] shadow-lg rounded-full h-auto" />
                        </div>

                        <span className='font-medium text-xl text-blue-900'>
                            Sing in to dashboard
                        </span>

                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='type your email'
                                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:border-blue-700 outline-none"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='type your password'
                                className="mt-1 outline-none p-2 w-full border border-gray-400 rounded-md focus:border-blue-700"
                            />
                        </div>

                        <button className="bg-blue-600 w-full h-10 text-white rounded-md">
                            Login
                        </button>

                        <span className="text-gray-600 text-sm border-b border-black cursor-pointer">
                            Olvidaste Tu Contraseña
                        </span>
                    </div>


                </div>


                <div className='w-[50%] h-screen flex justify-start items-center bg-gray-300'>
                    <div className='w-2/3 h-[80%] p- flex flex-col bg-blue-100' style={{ backgroundImage: 'url("fondosena.png")', backgroundSize: 'cover', backgroundColor: 'rgba(0, 128, 0, 0.6)', backgroundPosition: 'center' }}>

                        {/* <img src="logo.png" alt="" className='w-[30%]'/> */}
                        <div className='w-full bg-blue-500/90 h-[100%] flex flex-col justify-center p-5'>
                            <h1 className='font-bold text-[50px] text-white break-all flex flex-wrap'>Ingresa a nuestro <br /> sitio web</h1>
                            <span className='text-sm text-white font-light'>
                                Aqui podras conocer todo <br />
                                lo relacionado con el centro de acopio sena
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
