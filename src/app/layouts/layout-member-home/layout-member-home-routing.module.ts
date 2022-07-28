import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMemberHomeComponent } from './layout-member-home.component';
import { PageMemberHomeComponent } from 'src/app/pages/page-member-home/page-member-home.component';
import { PageMemberCollaboratorsComponent } from 'src/app/pages/page-member-collaborators/page-member-collaborators.component';
import { PageMemberPublicSpacesComponent } from 'src/app/pages/page-member-public-spaces/page-member-public-spaces.component';
import { PageMemberStatisticsComponent } from 'src/app/pages/page-member-statistics/page-member-statistics.component';
import { PageMemberProductsComponent } from 'src/app/pages/page-member-products/page-member-products.component';
import { PageMemberOrderComponent } from 'src/app/pages/page-member-order/page-member-order.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutMemberHomeRoutingModule {}