
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule, NgProgressBrowserXhr, NgProgressInterceptor } from 'ngx-progressbar';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/interceptors/token.interceptor';

import { AppComponent } from './containers/app/app.component';
import { LayoutModule } from '../layout/layout.module';
import { BrowserXhr } from '@angular/http/src/backends/browser_xhr';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

export const COMPONENTS = [
  AppComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule,
    LayoutModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        CanActivateViaAuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
      ],
    };
  }
}
