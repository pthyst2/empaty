import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#region Components
import { LayoutAuthComponent } from './layout-auth.component';
import { PageLoginComponent } from 'src/app/pages/page-login/page-login.component';
import { PageForgotPasswordComponent } from 'src/app/pages/page-forgot-password/page-forgot-password.component';
import { PageRegisterComponent } from 'src/app/pages/page-register/page-register.component';
//#endregion
const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        component: PageLoginComponent,
      },
      {
        path: 'login',
        component: PageLoginComponent,
      },
      {
        path: 'forgot-password',
        component: PageForgotPasswordComponent,
      },
      {
        path: 'register',
        component: PageRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutAuthRoutingModule {}
