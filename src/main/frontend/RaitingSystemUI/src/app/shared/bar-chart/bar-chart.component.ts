import {Component, Input, OnChanges} from '@angular/core';
import {GroupRating} from "../../core/base-entities";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {

  @Input() entity: GroupRating;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [], label: ''}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnChanges() {
    for (let i = 0; i < this.entity.ratings.length; i++) {
      this.barChartLabels.push(this.entity.ratings[i].topicName);
      this.barChartData[0].data.push(this.entity.ratings[i].averageGrade);
    }
    this.barChartData[0].label = this.entity.subjectName;
  }

}
