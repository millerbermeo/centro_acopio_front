import React, { useState, useEffect, useRef } from 'react';

function RenderNotificacion({ icono, texto, color }) {
    return (
        <div className={`bg-gray-100 w-[340px] shadow-md rounded overflow-hidden min-h-16 p-4 flex justify-between items-center hover:scale-105 cursor-pointer duration-300`}>
            <div className='flex items-end gap-3'>
                <span className={`rounded ${color} text-white w-8 h-8 text-xl flex justify-center items-center`}>
                    <ion-icon name={icono}></ion-icon>
                </span>
                <span className='text-base text-gray-700 font-normal'>{texto}</span>
            </div>
            <span className='cursor-pointer hover:text-red-600 duration-300'>
                <ion-icon name="close-circle"></ion-icon>
            </span>
        </div>
    );
}

function Notifications() {
    const [mostrar, setMostrar] = useState(false);
    const ref = useRef();

    const toggleMostrar = () => {


        if (mostrar == false) {
            setMostrar(true);
        }

        if (mostrar == true) {
            setMostrar(false);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMostrar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            <div ref={ref}>
                <button className='cursor-pointer hover:text-green-700' onClick={toggleMostrar}>
                    <ion-icon name="notifications-circle-outline"></ion-icon>
                </button>

                <div className={`${mostrar ? 'w-[400px] rounded shadow-md  h-64  p-5 bg-white' : 'w-0 h-0'} duration-500 flex flex-col gap-y-3 ease-linear overflow-y-auto overflow-x-hidden absolute top-14 -right-[190px] lg:right-0`}>
                    {mostrar && (
                        <>
                            <RenderNotificacion icono="flame" texto="Hola que hay de nuevo 1?" color="bg-blue-600" />
                            <RenderNotificacion icono="cloud" texto="Hola que hay de nuevo 2?" color="bg-green-600" />
                            <RenderNotificacion icono="thumbs-up" texto="Hola que hay de nuevo 3?" color="bg-blue-500" />
                            <RenderNotificacion icono="cloud" texto="Hola que hay de nuevo 2?" color="bg-gray-600" />
                            <RenderNotificacion icono="thumbs-up" texto="Hola que hay de nuevo 3?" color="bg-blue-500" />

                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Notifications;
