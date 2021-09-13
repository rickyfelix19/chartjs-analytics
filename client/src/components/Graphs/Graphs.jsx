import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Boston',
          'Worcester',
          'Springfield',
          'Lowell',
          'Cambridge',
          'New Bedford'
        ],
        datasets: [
          {
            label: 'Population',
            data: [444978, 515235, 702243, 41934, 232484, 149234]
          }
        ],
        backgroundColor: 'black',
        color: 'black'
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          data={'12'}
          // width={100}
          // height={50}
          options={{}}
        />
      </div>
    );
  }
}

export default Graphs;
