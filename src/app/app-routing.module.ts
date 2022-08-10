import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMemberInvoiceDetailComponent } from './pages/page-member-invoice-detail/page-member-invoice-detail.component';
import { PageTestZoneComponent } from './pages/page-test-zone/page-test-zone.component';
//#region Guards
import { GuardMember } from './services/guards/guard-member';
//#endregion
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/layout-home/layout-home.module').then(
        (m) => m.LayoutHomeModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/layout-auth/layout-auth.module').then(
        (m) => m.LayoutAuthModule
      ),
  },
  {
    path: 'member',
    canActivate: [GuardMember],
    loadChildren: () =>
      import('./layouts/layout-member-home/layout-member-home.module').then(
        (m) => m.LayoutMemberHomeModule
      ),
  },
  {
    path: 'invoice/:id',
    canActivate: [GuardMember],
    component: PageMemberInvoiceDetailComponent,
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./layouts/layout-error/layout-error.module').then(
        (m) => m.LayoutErrorModule
      ),
  },
  {
    path: 't',
    component: PageTestZoneComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'errors/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardMember],
})
export class AppRoutingModule {}
