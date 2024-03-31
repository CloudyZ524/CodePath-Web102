import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BookChart({ books }) {
    // Prepare data for the chart
    const labels = books.map(book => book.title);
    const data = {
        labels,
        datasets: [{
            label: 'Number of Editions',
            data: books.map(book => book.edition_count),
        }]
    };

    // Define chart options
    const options = {
        scales: {
          x: {
            ticks: {
              color: 'white', // Change x-axis labels to white
            }
          },
          y: {
            ticks: {
              color: 'white', // Change y-axis labels to white
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white', // Change legend text to white
            }
          }
        }
      };

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default BookChart;