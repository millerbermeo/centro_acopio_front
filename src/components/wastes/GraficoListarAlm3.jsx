import React, { useEffect, useState } from 'react';
import axiosClient from '../../axios-client';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 256);

  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  const alpha = 0.4; // Puedes ajustar el valor de transparencia según tus preferencias

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}



function GraficoListarAlm3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('residuo/listar_cantidad_alm');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

const chartData = {
  labels: data.map(item => `${item.nombre_alm}`), // Solo el nombre del almacén
  datasets: [
    {
      label: 'Tope de Almacén',
      backgroundColor: data.map(() => getRandomColor()),
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: data.map(item => parseInt(item.tope_alm, 10)),
    },
    {
      label: 'Cantidad de Almacén',
      backgroundColor: data.map(() => getRandomColor()),
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
  aspectRatio: 2, // Ajustar la relación de aspecto según tus preferencias
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
  
  

  return (
    <>
      <div className='px-5 py-2 h-64'>
        <h2>Gráfico de Almacenamiento</h2>
        {data.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </>
  );
  
}

export default GraficoListarAlm3;

