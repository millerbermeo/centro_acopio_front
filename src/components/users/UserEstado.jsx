import React from 'react';
import axiosClient from '../../axios-client';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function UserEstado({ id_usuario }) {

    const handleSubmit = async () => {
        try {
            // Realiza la petición Axios
            const response = await axiosClient.put(`usuario/estado/${id_usuario}`);
            console.log(response.data);

            // Llama a showAlert en caso de éxito
            showAlert('success', 'Operación exitosa');

        } catch (error) {
            // Llama a showAlert en caso de error
            showAlert('error', 'Hubo un error en la operación');
        }
    }

    const showAlert = (icon, text) => {
        Swal.fire({
            title: '¡Hola!',
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <>
            <button
                onClick={handleSubmit}
                type="submit"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Desactivar
            </button>
        </>
    );
}

export default UserEstado;
