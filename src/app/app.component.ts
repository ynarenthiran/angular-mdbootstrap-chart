import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  public chartType: string = "line";

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "My First dataset" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "My Second dataset" }
  ];

  public chartLabels: Array<any> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul"
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(220,220,220,0.2)",
      borderColor: "rgba(220,220,220,1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(220,220,220,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(220,220,220,1)"
    },
    {
      backgroundColor: "rgba(151,187,205,0.2)",
      borderColor: "rgba(151,187,205,1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(151,187,205,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(151,187,205,1)"
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  updateOnlyDatasets() {
    const firstChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ];
    const secondChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ];
    // This line will update only data in your Chart
    this.chartDatasets = [{ data: firstChartData }, { data: secondChartData }];
  }

  updateOnlyLabels() {
    // This line will update only label in your Chart
    // Note that if you need to update only label, you have to put some data into data property
    this.chartDatasets = [
      {
        data: this.chartDatasets[0].data,
        label: "Label no. " + Math.floor(Math.random() * 10)
      },
      {
        data: this.chartDatasets[1].data,
        label: "Label no. " + Math.floor(Math.random() * 10)
      }
    ];
  }

  updateDatasetsAndLabels() {
    const firstChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ];
    const secondChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ];

    // This line will update both data and label in Chart
    this.chartDatasets = [
      {
        data: firstChartData,
        label: "Label no. " + Math.floor(Math.random() * 10)
      },
      {
        data: secondChartData,
        label: "Label no. " + Math.floor(Math.random() * 10)
      }
    ];
  }

  updateChartMonthsLabels() {
    this.chartLabels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ];
  }

  updateChartColors() {
    this.chartColors = [
      {
        backgroundColor: "rgba(159,248,227,0.2)",
        borderColor: "rgba(15,239,187,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(220,220,220,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      },
      {
        backgroundColor: "rgba(15,239,75,0.2)",
        borderColor: "rgba(9,143,45,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(220,220,220,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }
    ];
  }
}
