//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutMemberHomeRoutingModule } from './layout-member-home-routing.module';
//#endregion

//#region Partials
import { PartialCreditCardComponent } from '../../partials/partial-credit-card/partial-credit-card.component';
import { PartialHeaderMemberComponent } from '../../partials/partial-header-member/partial-header-member.component';
import { PartialItemSpaceLargeComponent } from 'src/app/partials/partial-item-space-large/partial-item-space-large.component';
import { PartialItemCollaboratorComponent } from 'src/app/partials/partial-item-collaborator/partial-item-collaborator.component';
import { PartialItemPlanComponent } from '../../partials/partial-item-plan/partial-item-plan.component';
import { PartialItemPublicSpaceComponent } from 'src/app/partials/partial-item-public-space/partial-item-public-space.component';
import { PartialListCollaboratorsComponent } from '../../partials/partial-list-collaborators/partial-list-collaborators.component';
import { PartialListPublicSpacesComponent } from '../../partials/partial-list-public-spaces/partial-list-public-spaces.component';
import { PartialListPlansComponent } from '../../partials/partial-list-plans/partial-list-plans.component';
import { PartialSearchWithCategoryComponent } from 'src/app/partials/partial-search-with-category/partial-search-with-category.component';
import { PartialSectionSpacesLargeComponent } from '../../partials/partial-section-spaces-large/partial-section-spaces-large.component';
import { PartialSidebarSettingComponent } from '../../partials/partial-sidebar-setting/partial-sidebar-setting.component';
import { PartialTableProductsComponent } from '../../partials/partial-table-products/partial-table-products.component';
//#endregion

//#region Pages
import { PageMemberBillingComponent } from '../../pages/page-member-billing/page-member-billing.component';
import { PageMemberCollaboratorsComponent } from '../../pages/page-member-collaborators/page-member-collaborators.component';
import { PageMemberHomeComponent } from '../../pages/page-member-home/page-member-home.component';
import { PageMemberManageComponent } from 'src/app/pages/page-member-manage/page-member-manage.component';
import { PageMemberOrderComponent } from 'src/app/pages/page-member-order/page-member-order.component';
import { PageMemberProfileComponent } from '../../pages/page-member-profile/page-member-profile.component';
import { PageMemberProductsComponent } from 'src/app/pages/page-member-products/page-member-products.component';
import { PageMemberPublicSpacesComponent } from '../../pages/page-member-public-spaces/page-member-public-spaces.component';
import { PageMemberRolesComponent } from '../../pages/page-member-roles/page-member-roles.component';
import { PageMemberStatisticsComponent } from '../../pages/page-member-statistics/page-member-statistics.component';
//#endregion

//#region Modals
import { ModalAddCollaboratorComponent } from 'src/app/modals/modal-add-collaborator/modal-add-collaborator.component';
import { ModalCreateSpaceByImageComponent } from '../../modals/modal-create-space-by-image/modal-create-space-by-image.component';
import { ModalCreateSpaceComponent } from 'src/app/modals/modal-create-space/modal-create-space.component';
import { ModalDeleteSpaceComponent } from 'src/app/modals/modal-delete-space/modal-delete-space.component';
import { ModalDeleteCollaboratorComponent } from '../../modals/modal-delete-collaborator/modal-delete-collaborator.component';
import { ModalEditSpaceComponent } from 'src/app/modals/modal-edit-space/modal-edit-space.component';
import { ModalEditCollaboratorComponent } from '../../modals/modal-edit-collaborator/modal-edit-collaborator.component';
import { ModalInviteUserComponent } from 'src/app/modals/modal-invite-user/modal-invite-user.component';
import { ModalMakePrivateComponent } from '../../modals/modal-make-private/modal-make-private.component';
import { ModalPaySpaceComponent } from '../../modals/modal-pay-space/modal-pay-space.component';
import { ModalPurchasePlanComponent } from '../../modals/modal-purchase-plan/modal-purchase-plan.component';
//#endregion

//#region Layouts
import { LayoutMemberHomeComponent } from './layout-member-home.component';
import { LayoutSettingComponent } from '../layout-setting/layout-setting.component';
//#endregion
@NgModule({
  declarations: [
    LayoutMemberHomeComponent,
    LayoutSettingComponent,
    ModalAddCollaboratorComponent,
    ModalDeleteSpaceComponent,
    ModalDeleteCollaboratorComponent,
    ModalCreateSpaceByImageComponent,
    ModalCreateSpaceComponent,
    ModalEditCollaboratorComponent,
    ModalEditSpaceComponent,
    ModalMakePrivateComponent,
    ModalInviteUserComponent,
    ModalPaySpaceComponent,
    ModalPurchasePlanComponent,
    PageMemberBillingComponent,
    PageMemberCollaboratorsComponent,
    PageMemberHomeComponent,
    PageMemberManageComponent,
    PageMemberProductsComponent,
    PageMemberProfileComponent,
    PageMemberPublicSpacesComponent,
    PageMemberOrderComponent,
    PageMemberStatisticsComponent,
    PageMemberRolesComponent,
    PartialSectionSpacesLargeComponent,
    PartialTableProductsComponent,
    PartialHeaderMemberComponent,
    PartialItemSpaceLargeComponent,
    PartialSearchWithCategoryComponent,
    PartialItemCollaboratorComponent,
    PartialItemPublicSpaceComponent,
    PartialListCollaboratorsComponent,
    PartialListPublicSpacesComponent,
    PartialSidebarSettingComponent,
    PartialCreditCardComponent,
    PartialItemPlanComponent,
    PartialListPlansComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    FontAwesomeModule,
    LayoutMemberHomeRoutingModule,
  ],
})
export class LayoutMemberHomeModule {}
