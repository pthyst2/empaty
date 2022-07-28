//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
//#endregion

//#region Components
import { PartialHeaderAuthComponent } from 'src/app/partials/partial-header-auth/partial-header-auth.component';
import { PartialFooterAuthComponent } from 'src/app/partials/partial-footer-auth/partial-footer-auth.component';
import { PageLoginComponent } from 'src/app/pages/page-login/page-login.component';
import { PageForgotPasswordComponent } from 'src/app/pages/page-forgot-password/page-forgot-password.component';
import { PageRegisterComponent } from 'src/app/pages/page-register/page-register.component';
//#endregion

import { LayoutAuthRoutingModule } from './layout-auth-routing.module';
import { LayoutAuthComponent } from './layout-auth.component';

@NgModule({
  declarations: [
    LayoutAuthComponent,
    PartialHeaderAuthComponent,
    PartialFooterAuthComponent,
    PageLoginComponent,
    PageForgotPasswordComponent,
    PageRegisterComponent,
  ],
  imports: [CommonModule, ShareModule, LayoutAuthRoutingModule],
})
export class LayoutAuthModule {}
