import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, RequestOptions} from "@angular/http";
//import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {ActivatedRoute} from '@angular/router';
import {addProviderComponent} from '../components/addServiceProvider';
import {FormsModule,ReactiveFormsModule,FormGroup} from '@angular/forms';
import {providerLoginComponent} from '../components/providerLogin';
import {AppRoutingModule} from './routes';
import {ProviderService}from '../services/ServiceProvider';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    addProviderComponent,

    providerLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqsKlBRsxG-Spl8QC625fv4AxY29ZkxK0',
      libraries: ["places"]
    }),
    AppRoutingModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
