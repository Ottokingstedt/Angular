import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from '../data/single';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
    view: [number, number] = [500, 250];
  
    single: any[] = [
      {
        "name": "Omsättning",
        "value": 8940000
      },
      {
        "name": "Täckningsbidrag",
        "value": 542424
      },
      {
        "name": "Genomförsäljning",
        "value": 121212121
      },
    ];
    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'below';
  
    colorScheme: Color = {
      name: 'myScheme',
      selectable: false,
      group: ScaleType.Ordinal,
      domain: [
        '#341D35',
        '#FFD25F',
        '#D9D9D9'
      ]
    };
  
    constructor() {
    }
  
    onSelect(data : any): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
  
    onActivate(data : any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
  
    onDeactivate(data : any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
  }
