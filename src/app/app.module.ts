import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { SearchFabricantComponent } from './pages/fabricants/search-fabricant/search-fabricant.component';
import { InventairesComponent } from './pages/inventaires/inventaires.component';
import { CreateKitComponent } from './pages/kits/create-kit/create-kit.component';
import { KitsComponent } from './pages/kits/kits.component';
import { ModalKitComponent } from './pages/kits/modal-kit/modal-kit.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts';
registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    KitsComponent,
    HeaderComponent,
    FabricantsComponent,
    SearchFabricantComponent,
    ModalKitComponent,
    DashboardComponent,
    InfoFabricantComponent,
    CreateFabricantComponent,
    SidebarComponent,
    CreateKitComponent,
    CommandesComponent,
    InventairesComponent,
    CreateCommandeComponent,
    
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
    ChartsModule
  ],
  providers: [
    KitService,
    FabricantService,
    { provide: NZ_I18N, useValue: fr_FR },
    {provide : LOCALE_ID, useValue : "fr-FR"}
  ],
  entryComponents : [
    ModalKitComponent,
    InfoFabricantComponent,
    CreateFabricantComponent,
    CreateKitComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
