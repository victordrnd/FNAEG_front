import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/core/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
  commandes;
  dateRange
  filter = {
    creators : []
  }

  constructor(private commandeService : CommandeService) { }


  async ngOnInit() {
    this.commandes = await this.commandeService.getAll().toPromise(); 
  }

  async changeStatus(commande){
    await this.commandeService.update(commande).toPromise();
    this.commandes = await this.commandeService.getAll().toPromise(); 
  }

  sendFilter(){}
  onChangeRange(value){}
  

}
