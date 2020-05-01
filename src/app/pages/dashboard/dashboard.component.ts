import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { CommandeService } from 'src/app/core/services/commande.service';
import { InventaireService } from 'src/app/core/services/inventaire.service';
import { KitService } from 'src/app/core/services/kit.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private commandeService : CommandeService,
    private inventaireService : InventaireService,
    private kitService : KitService) {
  }

  commandes;
  inventaires;
  inventaireCount;
  lineChartData : ChartDataSets[];
  lineChartLabels;
  lastInventaire;
  currentStock;
  ordersAmount;

  async ngOnInit() {
    const allMonths = [
    "July", "August", "September", "October", "November", "December","January", "February", "March", "April", "May", "June"];;
    this.commandes = await this.commandeService.stats().toPromise();
    this.inventaires = await this.inventaireService.stats().toPromise();
    this.inventaireCount = await this.inventaireService.graphs().toPromise();
    this.lineChartLabels = Object.getOwnPropertyNames(this.inventaireCount).reverse();
    this.inventaireCount = Object.values(this.inventaireCount).reverse();
    this.lineChartData = [{ data: this.inventaireCount, label: 'Stock global' }];
    this.lineChartLabels = this.lineChartLabels.sort((a,b) => allMonths.indexOf(a)- allMonths.indexOf(b));
    this.lastInventaire = await this.inventaireService.last().toPromise()
    this.lastInventaire = this.lastInventaire.last_update;
    this.currentStock = await this.kitService.count().toPromise();
    this.ordersAmount = await this.commandeService.amount().toPromise();
  }

  
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    maintainAspectRatio: false,
    title : {
      display :true,
      text : 'Variation du stock',
      fontColor : 'white'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines : {color :'rgba(255,255,255,0.09)', zeroLineColor : 'transparent'},
        ticks :{
          fontColor : 'white'
        }
      }],
      yAxes: [
        {
          gridLines: { color: 'transparent', drawTicks: false, zeroLineColor : '#ffffff44' },
          display: true,
          ticks: {
            beginAtZero: true,
            fontColor : 'white',
            stepSize : 50
          }
          
        }
      ]
    }
  };
  public lineChartColors : Color[] = [
    {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: '#fff',
      
    }
  ];
  
  public lineChartLegend = false;
  public lineChartType = 'line';






}
