import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  @Input() data: any = [];


  constructor() { }

  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Randon DATA'
      },
      subtitle: {
        text: 'Source: Test.org'
      },
      yAxis: {
        title: {
            text: 'Billions'
        }
      },
      tooltip: {
        split: true,
        valueSuffix: ' mi'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data

    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
