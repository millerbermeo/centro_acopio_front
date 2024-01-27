import React, { useEffect, useState } from 'react';
import axiosClient from '../../axios-client';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function getRandomColor() {
    const randomColor = () => Math.floor(Math.random() * 256);

    const red = randomColor();
    const green = randomColor();
    const blue = randomColor();
    const alpha = 0.4; // Puedes ajustar el valor de transparencia según tus preferencias

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function GraficoListarAlm4() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get('residuo/listar_cantidad_alm');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const chartData = {
        labels: data.map(item => `${item.nombre_alm}`),
        datasets: [
            {
                label: 'Cantidad de Almacén',
                backgroundColor: data.map(() => getRandomColor()), // Asignar colores diferentes a cada elemento
                borderColor: getRandomColor(),
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.6)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: data.map(item => parseInt(item.cantidad_alm, 10)),
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false, // Permitir que el gráfico no mantenga la proporción original
        aspectRatio: 1, // Ajustar la relación de aspecto según tus preferencias
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <div className='px-5 pt-5 pb-10 h-[490px]'>
                <h2>Gráfico de Almacenamiento</h2>
                {data.length > 0 ? (
                    <Doughnut data={chartData} options={chartOptions} />
                ) : (
                    <p>Cargando datos...</p>
                )}
            </div>
        </>
    );
}

export default GraficoListarAlm4;
