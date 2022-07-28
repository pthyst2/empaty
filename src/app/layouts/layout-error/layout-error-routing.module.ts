import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorAuthenticationComponent } from 'src/app/pages/page-error-authentication/page-error-authentication.component';
import { PageErrorNotFoundComponent } from 'src/app/pages/page-error-not-found/page-error-not-found.component';
import { LayoutErrorComponent } from './layout-error.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutErrorComponent,
    children: [
      {
        path: 'page-not-found',
        component: PageErrorNotFoundComponent,
      },
      {
        path: 'authentication',
        component: PageErrorAuthenticationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutErrorRoutingModule {}
