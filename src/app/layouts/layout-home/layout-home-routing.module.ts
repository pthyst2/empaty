import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';
import { PageHomeComponent } from 'src/app/pages/page-home/page-home.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      {
        path: '',
        component: PageHomeComponent,
      },
      {
        path: 'home',
        component: PageHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutHomeRoutingModule {}
