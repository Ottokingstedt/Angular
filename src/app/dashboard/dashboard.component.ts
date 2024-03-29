import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentWeek: number;
  events = [];

  // Get weekly  

  constructor(
    private router: Router,
    private accountService: AccountService
    ){
    this.currentWeek = this.getWeekNumber(new Date());
    if(this.accountService.userValue){
      this.router.navigate(['/']);
    }
  };

  getWeekNumber(date: Date): number {
    const d =new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    const weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    return weekNo;
  }


  income: any[] = [
    {
      "name": "Omsättning",
      "price":"14933033kr",
      "series": [
          {
              "name": "deep-purple",
              "value":"0.01"
          },
          {
              "name": "amaber",
              "value":"59"
          },
          {
              "name": "gray",
              "value":"4"
          },
          
      ]
      
  },
  {
      "name": "Täckningsbidrag",
      "percent":"52%",
      "series": [
          {
              "name": "deep-purple",
              "value":"0.3"
          },
          {
              "name": "amaber",
              "value":"22"
          },
          {
              "name": "gray",
              "value":"8"
          },
          
      ]
  },

  {
      "name": "Genomförsäljning",
      "percent":"34%",
      "series": [
          {
              "name": "deep-purple",
              "value":"0.2"
          },
          {
              "name": "amaber",
              "value":"5"
          },
          {
              "name": "gray",
              "value":"6"
          },
          
      ]
  },
  ];
  view: [number, number] = [600, 200];

  //options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  tooltipDisabled: boolean = true;
  roundDomains: boolean = true;
  xAxisLabel: string = 'Bättre än 91%';

    // options
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = true;
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

onSelect(event: any){
  console.log(event)
  console.log('Item clicked', JSON.parse(JSON.stringify(event)));

}

onActivate(data : any): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data : any): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}

}
