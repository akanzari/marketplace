import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/header/top-bar/top-bar.component';
import { MiddleBarComponent } from './components/header/middle-bar/middle-bar.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';


export const COMPONENTS = [
  HeaderComponent,
  TopBarComponent,
  MiddleBarComponent,
  NavBarComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {
  static forRoot() {
    return {
      ngModule: LayoutModule
    };
  }
}
