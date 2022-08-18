//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
//#endregion

//#region Pages
import { PageHomeComponent } from 'src/app/pages/page-home/page-home.component';
//#endregion

//#region Partials
import { PartialHeaderHomeComponent } from 'src/app/partials/partial-header-home/partial-header-home.component';
import { PartialFooterHomeComponent } from 'src/app/partials/partial-footer-home/partial-footer-home.component';
import { PartialBannerHomeComponent } from 'src/app/partials/partial-banner-home/partial-banner-home.component';
import { PartialSectionBaseComponent } from 'src/app/partials/partial-section-base/partial-section-base.component';
import { PartialSectionSpacesComponent } from 'src/app/partials/partial-section-spaces/partial-section-spaces.component';
import { PartialItemSpaceComponent } from 'src/app/partials/partial-item-space/partial-item-space.component';
import { PartialItemFunctionComponent } from 'src/app/partials/partial-item-function/partial-item-function.component';
import { PartialItemBlogComponent } from 'src/app/partials/partial-item-blog/partial-item-blog.component';
//#endregion

//#region Fixed items
import { FixedItemBaseComponent } from 'src/app/fixed-items/fixed-item-base/fixed-item-base.component';
//#endregion

import { LayoutHomeRoutingModule } from './layout-home-routing.module';
import { LayoutHomeComponent } from './layout-home.component';

@NgModule({
  declarations: [
    LayoutHomeComponent,
    PageHomeComponent,
    PartialHeaderHomeComponent,
    PartialBannerHomeComponent,
    PartialFooterHomeComponent,
    PartialSectionBaseComponent,
    PartialSectionSpacesComponent,
    PartialItemSpaceComponent,
    PartialItemFunctionComponent,
    PartialItemBlogComponent,
    FixedItemBaseComponent,
  ],
  imports: [CommonModule, ShareModule, LayoutHomeRoutingModule],
})
export class LayoutHomeModule {}
