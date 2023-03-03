import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent {
  addSymbols = (e: any) => {
	  var suffixes = ["", "K", "M", "B"];
 
	  var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
	  if(order > suffixes.length - 1)
		order = suffixes.length - 1;
 
	  var suffix = suffixes[order];
	  return (e.value / Math.pow(1000, order) + suffix);
	}
	
	chartOptions = {
	  animationEnabled: true,
	  axisY2: {
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  axisY: {
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  legend: {
		cursor: "pointer",
		itemclick: (e: any) => {
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  } else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{ 
      color: "#AEAEAE",       
		  type: "bar",  
		  showInLegend: true, 
		  legendText: "Index",
		  dataPoints: [      
        { y:19000, label: "Jeans" },
        { y:12000 , label: "Accessoarer" },
        { y:20000, label: "Byxa" },
        { y:15000 , label: "Klänning" },
        { y:17000, label: "Kortärmat" },
        { y:23000 , label: "Skjorta/Blus" },
        { y:22000, label: "Rock/Kappa" },
        { y:37000, label: "Tröja" }
		  ]
		}, {  
      color: "#38063A",      
		  type: "bar",  
		  axisYType: "secondary",
		  showInLegend: true,
		  legendText: "Omsättning",
		  dataPoints: [      
			{ y:19000, label: "Jeans" },
			{ y:19000 , label: "Accessoarer" },
			{ y:41000, label: "Byxa" },
			{ y:41000, label: "Klänning" },
			{ y:41000, label: "Kortärmat" },
			{ y:47000 , label: "Skjorta/Blus" },
			{ y:47000, label: "Rock/Kappa" },
			{ y:47000, label: "Tröja" }
		  ]
		}]
	}
}
