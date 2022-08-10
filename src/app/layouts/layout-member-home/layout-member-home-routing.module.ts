//#region Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMemberHomeComponent } from './layout-member-home.component';
import { PageMemberHomeComponent } from 'src/app/pages/page-member-home/page-member-home.component';
import { PageMemberCollaboratorsComponent } from 'src/app/pages/page-member-collaborators/page-member-collaborators.component';
import { PageMemberPublicSpacesComponent } from 'src/app/pages/page-member-public-spaces/page-member-public-spaces.component';
import { PageMemberStatisticsComponent } from 'src/app/pages/page-member-statistics/page-member-statistics.component';
import { PageMemberProductsComponent } from 'src/app/pages/page-member-products/page-member-products.component';
import { PageMemberOrderComponent } from 'src/app/pages/page-member-order/page-member-order.component';
import { PageMemberProfileComponent } from 'src/app/pages/page-member-profile/page-member-profile.component';
import { PageMemberManageComponent } from 'src/app/pages/page-member-manage/page-member-manage.component';
import { PageMemberBillingComponent } from 'src/app/pages/page-member-billing/page-member-billing.component';
import { PageMemberRolesComponent } from 'src/app/pages/page-member-roles/page-member-roles.component';
import { PageMemberInvoiceDetailComponent } from 'src/app/pages/page-member-invoice-detail/page-member-invoice-detail.component';
//#endregion

const routes: Routes = [
  {
    path: '',
    component: LayoutMemberHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: PageMemberHomeComponent,
      },
      {
        path: 'products',
        component: PageMemberProductsComponent,
      },
      {
        path: 'order-space',
        component: PageMemberOrderComponent,
      },
      {
        path: 'collaborators',
        component: PageMemberCollaboratorsComponent,
      },
      {
        path: 'public-spaces',
        component: PageMemberPublicSpacesComponent,
      },
      {
        path: 'statistics',
        component: PageMemberStatisticsComponent,
      },

      {
        path: 'setting',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'profile',
          },
          {
            path: 'profile',
            component: PageMemberProfileComponent,
          },
          {
            path: 'manage',
            component: PageMemberManageComponent,
          },
          {
            path: 'billing',
            component: PageMemberBillingComponent,
          },
          {
            path: 'roles',
            component: PageMemberRolesComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutMemberHomeRoutingModule {}
