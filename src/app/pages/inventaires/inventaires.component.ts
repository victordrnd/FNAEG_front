import { Component, OnInit } from '@angular/core';
import {InventaireService} from '../../core/services/inventaire.service'
@Component({
  selector: 'app-inventaires',
  templateUrl: './inventaires.component.html',
  styleUrls: ['./inventaires.component.scss']
})
export class InventairesComponent implements OnInit {
  inventaires;
  filter = {
    page: 1,
    creators : [],
    dateRange : []
  }
  dateRange;
  constructor(private inventaireService : InventaireService) { }

  async ngOnInit() {
    this.inventaires = await this.inventaireService.getAllInventaire().toPromise();
  }


  async onLoadMore(){
    this.filter.page++;
    const newInventaire = await this.inventaireService.getAllInventaire(this.filter.page).toPromise();
    newInventaire.data = [
      ...this.inventaires.data,
      ...newInventaire.data
    ]
    console.log(newInventaire)
    this.inventaires = newInventaire;
  }

  onChangeRange(value){

    this.filter.dateRange = value.length ? value.map(date => date.toISOString().split('T')[0]) : null;
    this.sendFilter();
  }

  async sendFilter(){
    this.filter.page = 1;
    this.inventaires = await this.inventaireService.filter(this.filter).toPromise();
  }

}
