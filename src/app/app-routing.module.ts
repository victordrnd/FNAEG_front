import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KitsComponent } from './pages/kits/kits.component';
import { FabricantsComponent } from './pages/fabricants/fabricants.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventairesComponent } from './pages/inventaires/inventaires.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { CreateCommandeComponent } from './pages/commandes/create-commande/create-commande.component';

const routes: Routes = [
  {
    path: '',
    //component: DashboardComponent,
    data: {
      breadcrumb: 'Accueil'
    },
    children: [
      {
        path : '',
        component : DashboardComponent
      },
      {
        path: 'kits',
        component: KitsComponent,
        data: {
          breadcrumb: 'Kits'
        }
      },
      {
        path: 'fabricants',
        component: FabricantsComponent,
        data: {
          breadcrumb: 'Fabricants'
        } 
      },
      {
        path: 'inventaires',
        component : InventairesComponent,
        data : {
          breadcrumb : 'Inventaires'
        }
      },
      {
        path : 'commandes',
        data : {
          breadcrumb : 'Commandes'
        },
        children : [
          {
            path :'',
            component : CommandesComponent,
          },
          {
            path : 'new',
            component : CreateCommandeComponent,
            data: {
              breadcrumb :'Nouvelle commande'
            }
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
