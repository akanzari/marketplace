import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HeaderComponent, ProfileDropdownComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {
  static forRoot() {
    return {
      ngModule: LayoutModule
    };
  }
}
