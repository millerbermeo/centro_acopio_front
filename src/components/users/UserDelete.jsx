import React from 'react'
import axiosClient from '../../axios-client'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function UserDelete({id}) {

    
    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };



    const handleDelete = () => {
        try {
            axiosClient.get(`usuario/eliminar/${id}`).then((response) => {
                console.log(response)
                showAlert('success', 'Operación exitosa');

            }).catch((error) => {
                console.log(error)
                showAlert('error', 'Hubo un error en la operación');
            })

        } catch (error) {
            console.log("error en la peticion")
            showAlert('error', 'Hubo un error en la operación');
        }
    }


    return (
        <>
            <button
                onClick={handleDelete}
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Eliminar
            </button>
        </>
    )
}

export default UserDelete