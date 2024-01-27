import React, { useEffect, useState } from 'react';
import axiosClient from '../../axios-client';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 256);

  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  const alpha = 0.4; // Puedes ajustar el valor de transparencia según tus preferencias

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}



function GraficoListarMov() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('residuo/listar_mov_mes');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

const chartData = {
  labels: data.map(item => `${item.nombre_mes} ${item.anio}`),
  datasets: [
    {
      label: 'Cantidad Movimientos',
      backgroundColor: data.map(() => getRandomColor()),
      borderColor: getRandomColor(),
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: data.map(item => parseInt(item.cantidad_movimientos, 10)),
    },
    {
      label: 'Tipo Entrada',
      backgroundColor: data.map(() => getRandomColor()),
      borderColor: getRandomColor(),
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.6)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: data.map(item => parseInt(item.cantidad_entradas, 10)),
    },
    {
        label: 'Tipo Salida',
        backgroundColor: data.map(() => getRandomColor()),
        borderColor: getRandomColor(),
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.6)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.map(item => parseInt(item.cantidad_salidas, 10)),
      },
  ],
};

  

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  

  return (
    <>
      <div className='px-10 py-5'>
        <h2>Gráfico de Movimientos</h2>
        {data.length > 0 ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </>
  );
  
}



export default GraficoListarMov