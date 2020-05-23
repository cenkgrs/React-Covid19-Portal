import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import "./charts.css";

const state = {
  labels: ['11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar', '23 Mar', '24 Mar','25 Mar', '26 Mar', '27 Mar', '28 Mar', '29 Mar', '30 Mar', '31 Mar',
            '1 Apr', '2 Apr', '', '4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr', '10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr',
            '16 Apr', '17 Apr', '18 Apr', '19 Apr', '20 Apr', '21 Apr' , '22 Apr' , '23 Apr' , '24 Apr' , '25 Apr' , '26 Apr' , '27 Apr' , '28 Apr' , '29 Apr' , '30 Apr',
            '1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May', '8 May', '9 May', '10 May', '11 May', '12 May', '13 May', '14 May', '15 May',
            '16 May', '17 May', '18 May', '19 May', '20 May', '21 May' , '22 May' , '23 May'  ],
  datasets: [
    {
      label: 'Cases',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1, 1, 5, 6, 18, 47, 98, 191, 359, 670, 947, 1236, 1529, 1872, 2433, 3629, 5698, 7402, 9217, 10827, 13531,
             15679, 18135, 20921, 23934, 27069, 30217, 34109, 38226, 42282, 47029, 52167, 56956, 61049, 65111, 69392, 
             74193, 78546, 82329, 86306, 90980, 95591, 98674, 101790, 104912,107773, 110130, 112261, 114653, 117589, 120204,
              122932, 124375, 126045, 127659, 129491, 131744, 133721, 135569, 137115, 138657, 139711, 141475, 143114, 144749, 146457,
            148067, 149435, 150593, 151615, 152587, 153548, 154500]
    }
  ],

 
}

const bar_state = {
    labels: ['18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar', '23 Mar', '24 Mar','25 Mar', '26 Mar', '27 Mar', '28 Mar', '29 Mar', '30 Mar', '31 Mar',
            '1 Apr', '2 Apr', '', '4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr', '10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr',
            '16 Apr', '17 Apr', '18 Apr', '19 Apr', '20 Apr', '21 Apr' , '22 Apr' , '23 Apr' , '24 Apr' , '25 Apr' , '26 Apr' , '27 Apr' , '28 Apr' , '29 Apr' , '30 Apr',
            '1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May', '8 May', '9 May', '10 May', '11 May', '12 May', '13 May', '14 May', '15 May',
            '16 May', '17 May', '18 May', '19 May', '20 May', '21 May' , '22 May' , '23 May'  ],
   
    datasets: [
        {
            label: 'Deaths',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [1, 2, 5, 12, 9, 7, 7, 15, 16, 17, 16, 23, 37, 46,
                 63, 79, 69, 76, 73, 75, 76, 87, 96, 98, 95, 97, 98, 107, 115, 125, 126, 121, 127, 123, 119, 117, 115, 109, 106, 99, 95, 92, 89, 93,
                84, 78, 61, 64, 59,64, 57, 48, 50, 47, 55, 53, 58, 55, 48, 41, 44, 31, 28, 23, 27, 27]
        }
    ]
}

export default class App extends React.Component {
  render() {
    return (
      <div class="charts-container">
        <Line
            data={state}
            height={10}
            width={50}
            options={{
                title:{
                display:true,

                text:'Total Coronavirus Cases in Turkey',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
        />
        <br></br>
        <br></br>
        <br></br>
        
        <Bar
            data={bar_state}
            height={10}
            width={50}
            options={{
                title:{
                display:true,
                text:'Daily Deaths in Turkey',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
        />
      </div>
    );
  }
}