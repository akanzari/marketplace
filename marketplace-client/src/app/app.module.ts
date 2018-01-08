import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from './core/core.module';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './app.reducer';

import { environment } from '../environments/environment';

// RX imports
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/retry';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    CatalogModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }