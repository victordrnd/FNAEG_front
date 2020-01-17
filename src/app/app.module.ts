import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { fr_FR, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricantService } from './core/services/fabricant.service';
import { KitService } from './core/services/kit.service';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { CreateCommandeComponent } from './pages/commandes/create-commande/create-commande.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateFabricantComponent } from './pages/fabricants/create-fabricant/create-fabricant.component';
import { FabricantsComponent } from './pages/fabricants/fabricants.component';
import { InfoFabricantComponent } from './pages/fabricants/info-fabricant/info-fabricant.component';
import { InventairesComponent } from './pages/inventaires/inventaires.component';
import { CreateKitComponent } from './pages/kits/create-kit/create-kit.component';
import { KitsComponent } from './pages/kits/kits.component';
import { ModalKitComponent } from './pages/kits/modal-kit/modal-kit.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HttpTokenInterceptor } from './core/services/interceptors/http.token.interceptor';
import { UsersComponent } from './pages/users/users.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    KitsComponent,
    HeaderComponent,
    FabricantsComponent,
    ModalKitComponent,
    DashboardComponent,
    InfoFabricantComponent,
    CreateFabricantComponent,
    SidebarComponent,
    CreateKitComponent,
    CommandesComponent,
    InventairesComponent,
    CreateCommandeComponent,
    AuthenticationComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ChartsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    KitService,
    FabricantService,
    { provide: NZ_I18N, useValue: fr_FR },
    {provide : LOCALE_ID, useValue : "fr-FR"},
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
  ],
  entryComponents : [
    ModalKitComponent,
    InfoFabricantComponent,
    CreateFabricantComponent,
    CreateKitComponent,
    CreateUserComponent,
    EditUserComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
