import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { KitsComponent } from './pages/kits/kits.component';
import { HeaderComponent } from './shared/header/header.component';
import { KitService } from './core/services/kit.service';
import { FabricantService } from './core/services/fabricant.service';
import { FabricantsComponent } from './pages/fabricants/fabricants.component';
import { SearchFabricantComponent } from './pages/fabricants/search-fabricant/search-fabricant.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ModalKitComponent } from './pages/kits/modal-kit/modal-kit.component';
import { NgZorroAntdModule, NZ_I18N, fr_FR } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoFabricantComponent } from './pages/fabricants/info-fabricant/info-fabricant.component';
import { CreateFabricantComponent } from './pages/fabricants/create-fabricant/create-fabricant.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
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
    NgZorroAntdModule
  ],
  providers: [
    KitService,
    FabricantService,
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  entryComponents : [
    ModalKitComponent,
    InfoFabricantComponent,
    CreateFabricantComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
