//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
//#endregion

//#region Buttons
import { ButtonBaseComponent } from 'src/app/buttons/button-base/button-base.component';
import { ButtonIconFontAwesomeComponent } from 'src/app/buttons/button-icon-font-awesome/button-icon-font-awesome.component';
import { ButtonSvgComponent } from 'src/app/buttons/button-svg/button-svg.component';
//#endregion

//#region Partials
import { PartialCopyrightComponent } from 'src/app/partials/partial-copyright/partial-copyright.component';
import { PartialLoadingComponent } from 'src/app/partials/partial-loading/partial-loading.component';
import { PartialPaginationComponent } from 'src/app/partials/partial-pagination/partial-pagination.component';
//#endregion

//#region Fixed items
import { FixedItemUserComponent } from 'src/app/fixed-items/fixed-item-user/fixed-item-user.component';
//#endregion

//#region Modals
import { ModalBaseComponent } from 'src/app/modals/modal-base/modal-base.component';
import { ModalMessageComponent } from 'src/app/modals/modal-message/modal-message.component';
//#endregion modals

//#region Sliders
import { SliderBaseComponent } from '../../sliders/slider-base/slider-base.component';
import { SliderCreateSpaceComponent } from '../../sliders/slider-create-space/slider-create-space.component';
//#endregion

@NgModule({
  declarations: [
    PartialCopyrightComponent,
    ButtonBaseComponent,
    ButtonIconFontAwesomeComponent,
    ButtonSvgComponent,
    FixedItemUserComponent,
    ModalBaseComponent,
    ModalMessageComponent,
    PartialLoadingComponent,
    PartialPaginationComponent,
    SliderBaseComponent,
    SliderCreateSpaceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
  ],
  exports: [
    ButtonBaseComponent,
    ButtonIconFontAwesomeComponent,
    ButtonSvgComponent,
    PartialCopyrightComponent,
    FixedItemUserComponent,
    ModalBaseComponent,
    ModalMessageComponent,
    PartialLoadingComponent,
    PartialPaginationComponent,
    SliderBaseComponent,
    SliderCreateSpaceComponent,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
  ],
  providers: [],
})
export class ShareModule {}