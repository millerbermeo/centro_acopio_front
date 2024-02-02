import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client'
import { useNavigate } from 'react-router-dom'

function Login() {

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const [tipoInput, setTipoInput] = useState('password');
    const [mostrar, setMostrar] = useState(false);


    const cambiarTipoInput = () => {
        // Cambia el tipo de input entre 'text' y 'password'
        setTipoInput((tipoAnterior) => (tipoAnterior === 'password' ? 'text' : 'password'));
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const data = {
            email: email.current.value,
            password: password.current.value
        };

        axiosClient.post('usuario/validar', data)
            .then(response => {
                console.log(response);

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('rol', response.data.rol);
                localStorage.setItem('nombre', response.data.nombre);


                if (response.data.rol === 'administrador') {
                    navigate('/home');
                } else {
                    // Redirigir a la página de inicio de sesión u otro destino según tus necesidades
                    navigate('/');
                }
            })
            .catch((error) => {
                // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
                console.error('Error during login:', error);
                      setMostrar(true)
            });
    };


    return (
        <>

            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-green-200">
                <form onSubmit={handleSubmit} className="bg-white w-full h-screen md:h-auto md:w-[410px] 2xl:w-[450px] p-8 rounded shadow-md flex flex-col justify-center">
                    <div className='flex flex-col items-center'>
                        <span className='text-9xl'>
                            <ion-icon name="people-circle-outline"></ion-icon>
                        </span>
                        <h2 className="text-2xl -translate-y-2 text-center font-black uppercase">Centro de Acopio</h2>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
                            Email
                        </label>
                        <input
                            autoFocus
                            ref={email}
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                            required
                            placeholder='Enter Email'
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">
                            Password
                        </label>
                        <input
                            ref={password}
                            type={tipoInput}
                            id="password"
                            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                            required
                            placeholder='Enter Password'
                        />
                        <label htmlFor="password" onClick={cambiarTipoInput} className='absolute cursor-pointer text-2xl top-10 right-3'>
                            <ion-icon name={tipoInput === 'password' ? 'eye-off-outline' : 'eye-outline'}></ion-icon>
                        </label>
                    </div>

                    <div className='text-right mt-2'>
                        <p>Olvidates Tu Contraseña?</p>
                    </div>

                    <div className='h-5 mb-2 flex items-center pl-[1px]'>
                        {mostrar && (
                            <>
                                Datos Incorrectos
                            </>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 hover:to-blue-600 transition duration-300 ease-in-out w-full text-white p-3 rounded focus:outline-none"
                    >
                        Login
                    </button>

                    {/* <div className='w-full mt-6 flex justify-center gap-1 items-center'>
                    <div className='w-[90%] h-[1px] bg-black'></div>
                    <ModalRegister/>
                    <div className='w-[90%] h-[1px] bg-black'></div>
                </div> */}
                </form>
            </div>






        </>
    )
}

export default Login
