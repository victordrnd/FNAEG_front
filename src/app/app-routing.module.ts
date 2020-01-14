import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KitsComponent } from './pages/kits/kits.component';
import { FabricantsComponent } from './pages/fabricants/fabricants.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventairesComponent } from './pages/inventaires/inventaires.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { CreateCommandeComponent } from './pages/commandes/create-commande/create-commande.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import {AuthGuardService} from './core/services/guards/auth-guard.service';
import { UsersComponent } from './pages/users/users.component';
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Accueil'
    },
    children: [
      {
        path : '',
        component : AuthenticationComponent,
        data: {
          breadcrumb : "Connexion"
        }
      },
      {
        path : 'dashboard',
        component : DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'kits',
        component: KitsComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Kits'
        }
      },
      {
        path: 'fabricants',
        component: FabricantsComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Fabricants'
        } 
      },
      {
        path: 'inventaires',
        component : InventairesComponent,
        canActivate: [AuthGuardService],
        data : {
          breadcrumb : 'Inventaires'
        }
      },
      {
        path : 'commandes',
        canActivate: [AuthGuardService],
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
      },
      {
        path : 'users',
        canActivate : [AuthGuardService],
        data : {
          breadcrumb : 'Utilisateurs'
        },
        component : UsersComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
