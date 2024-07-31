import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from '../context/crypto-context';


ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {

    const { assets } = useCrypto()

    const data = {
        labels: assets.map(a => a.name),
        datasets: [{
          label: '$',
          data: assets.map(a => a.totalAmount),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }]
    };

    return (
        <div>
        <h2>Portfolio Chart</h2>
        <div
            style={{
            display: 'flex',
            marginBottom: '1rem',
            justifyContent: 'center',
            height: 400,
            width: '100%'
            }}
        >
            <Pie data={data} />
        </div>
        </div>
    );
}
