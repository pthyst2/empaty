//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutMemberHomeRoutingModule } from './layout-member-home-routing.module';

//#endregion

//#region Partials
import { PartialHeaderMemberComponent } from '../../partials/partial-header-member/partial-header-member.component';
import { PartialItemSpaceLargeComponent } from 'src/app/partials/partial-item-space-large/partial-item-space-large.component';
import { PartialSectionSpacesLargeComponent } from '../../partials/partial-section-spaces-large/partial-section-spaces-large.component';
import { PartialSearchWithCategoryComponent } from 'src/app/partials/partial-search-with-category/partial-search-with-category.component';
import { PartialTableProductsComponent } from '../../partials/partial-table-products/partial-table-products.component';
import { PartialItemCollaboratorComponent } from 'src/app/partials/partial-item-collaborator/partial-item-collaborator.component';
import { PartialListCollaboratorsComponent } from '../../partials/partial-list-collaborators/partial-list-collaborators.component';
//#endregion

//#region Pages
import { LayoutMemberHomeComponent } from './layout-member-home.component';
import { PageMemberHomeComponent } from '../../pages/page-member-home/page-member-home.component';
import { PageMemberCollaboratorsComponent } from '../../pages/page-member-collaborators/page-member-collaborators.component';
import { PageMemberPublicSpacesComponent } from '../../pages/page-member-public-spaces/page-member-public-spaces.component';
import { PageMemberStatisticsComponent } from '../../pages/page-member-statistics/page-member-statistics.component';
import { PageMemberProductsComponent } from 'src/app/pages/page-member-products/page-member-products.component';
import { PageMemberOrderComponent } from 'src/app/pages/page-member-order/page-member-order.component';
//#endregion

//#region Modals
import { ModalCreateSpaceComponent } from 'src/app/modals/modal-create-space/modal-create-space.component';
import { ModalAddCollaboratorComponent } from 'src/app/modals/modal-add-collaborator/modal-add-collaborator.component';
import { ModalDeleteSpaceComponent } from 'src/app/modals/modal-delete-space/modal-delete-space.component';
import { ModalPaySpaceComponent } from '../../modals/modal-pay-space/modal-pay-space.component';
import { ModalDeleteCollaboratorComponent } from '../../modals/modal-delete-collaborator/modal-delete-collaborator.component';
import { ModalEditCollaboratorComponent } from '../../modals/modal-edit-collaborator/modal-edit-collaborator.component';
//#endregion
@NgModule({
  declarations: [
    LayoutMemberHomeComponent,
    PageMemberHomeComponent,
    PageMemberCollaboratorsComponent,
    PageMemberPublicSpacesComponent,
    PageMemberStatisticsComponent,
    PageMemberProductsComponent,
    PageMemberOrderComponent,
    PartialSectionSpacesLargeComponent,
    PartialTableProductsComponent,
    PartialHeaderMemberComponent,
    PartialItemSpaceLargeComponent,
    PartialSearchWithCategoryComponent,
    PartialItemCollaboratorComponent,
    ModalCreateSpaceComponent,
    ModalAddCollaboratorComponent,
    ModalDeleteSpaceComponent,
    ModalPaySpaceComponent,
    PartialListCollaboratorsComponent,
    ModalDeleteCollaboratorComponent,
    ModalEditCollaboratorComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    FontAwesomeModule,
    LayoutMemberHomeRoutingModule,
  ],
})
export class LayoutMemberHomeModule {}