import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class MaleFemalePie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Male", "Female"],
        datasets: [
          {
            data: [73, 27],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h1>Male/Female Blood Donation Ratio</h1>
        <Pie
          data={this.state.chartData}
          options={{
            animation: {
              animateScale: true
            }
          }}
        />
      </div>
    );
  }
}

export default MaleFemalePie;
