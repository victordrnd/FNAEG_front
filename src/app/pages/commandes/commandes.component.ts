import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/core/services/commande.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

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
  users;

  constructor(private commandeService : CommandeService,
    private userService : UtilisateurService) { }


  async ngOnInit() {
    this.commandes = await this.commandeService.getAll().toPromise();
    this.users = await this.userService.getAllUsers().toPromise(); 
  }

  async changeStatus(commande){
    await this.commandeService.update(commande).toPromise();
    this.commandes = await this.commandeService.getAll().toPromise(); 
  }

  async sendFilter(){
    this.commandes = await this.commandeService.filter(this.filter).toPromise()
  }

  
  onChangeRange(value){}
  

}
