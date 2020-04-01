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
import { AuthGuardService } from './core/services/guards/auth-guard.service';
import { UsersComponent } from './pages/users/users.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { SettingsComponent } from './pages/settings/settings.component';
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Accueil'
    },
    children: [
      {
        path: '',
        component: AuthenticationComponent,
        data: {
          breadcrumb: "Connexion"
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'kits',
        component: KitsComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Kits',
          permissions: {
            only: 'kits.view',
            redirectTo: '/dashboard'
          }
        }
      },
      {
        path: 'fabricants',
        component: FabricantsComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Fabricants',
          permissions: {
            only: 'fabricants.view',
            redirectTo: '/dashboard'
          }
        }
      },
      {
        path: 'inventaires',
        component: InventairesComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Inventaires',
          permissions: {
            only: 'inventory.view',
            redirectTo: '/dashboard'
          }
        }
      },
      {
        path: 'commandes',
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Commandes',
          permissions: {
            only : 'orders.view',
            redirectTo: '/dashboard'
          },
        },
        children: [
          {
            path: '',
            component: CommandesComponent,
          },
          {
            path: 'new',
            component: CreateCommandeComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              breadcrumb: 'Nouvelle commande',
              permissions: {
                only : 'orders.create',
                redirectTo: '/commandes'
              }
            }
          }
        ]
      },
      {
        path: 'users',
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Utilisateurs',
          permissions: {
            only: 'users.view',
            redirectTo: '/dashboard'
          }
        },
        component: UsersComponent
      },
      {
        path : 'settings',
        canActivate : [AuthGuardService, NgxPermissionsGuard],
        data : {
          breadcrumb : 'Réglages',
          permissions : {
            only : "permission.edit",
            redirectTo : "/dashboard"
          }
        },
        component : SettingsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
