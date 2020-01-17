import { Component, OnInit } from '@angular/core';
import { KitService } from 'src/app/core/services/kit.service';
import { CommandeService } from 'src/app/core/services/commande.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.scss']
})
export class CreateCommandeComponent implements OnInit {

  constructor(private kitService : KitService,
    private commandeService : CommandeService,
    private notification : NzNotificationService,
    private router : Router) { }

  commande = {
    lignes : [],
    checkAll : false,
    prix : 0
  }
  kits;


  async ngOnInit() {
    this.kits = await this.kitService.getAllKit().toPromise();
    this.kits.map(kit => kit.Qte = 1);
  }

  select(ev){
  }
  change(ev){
    this.commande.lignes = this.kits.filter(kit => kit.direction == 'right');
    this.kits.checkAll = false;
    this.commande.checkAll = false;
    this.calculateOrderPrice()
  }

  calculateOrderPrice(){
    this.commande.prix = 0;
    for(const kit of this.commande.lignes){
      this.commande.prix += kit.prix * kit.Qte;
    }
  }


  async confirmOrder(){
    await this.commandeService.create(this.commande).toPromise();
    this.notification.create(
      'success',
      'Succès',
      'La commande a correctement été validée par le serveur.'
    );
    this.router.navigate(['/commandes']);
  }

}
