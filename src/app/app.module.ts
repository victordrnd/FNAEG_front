import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    KitsComponent,
    HeaderComponent,
    FabricantsComponent,
    SearchFabricantComponent,
    ModalKitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [KitService, FabricantService],
  entryComponents : [ModalKitComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
