import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppComponent }   from './app.component';
import { providerLoginComponent }      from '../components/providerLogin';


const routes: Routes = [
  { path: '', redirectTo: '/providerLogin', pathMatch: 'full' },
  { path: 'providerLogin',  component: providerLoginComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/