//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
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
import { PartialItemSwitchComponent } from '../../partials/partial-item-switch/partial-item-switch.component';
//#endregion

//#region Fixed items
import { FixedItemUserComponent } from 'src/app/fixed-items/fixed-item-user/fixed-item-user.component';
//#endregion

//#region Modals
import { ModalBaseComponent } from 'src/app/modals/modal-base/modal-base.component';
import { ModalConfirmComponent } from '../../modals/modal-confirm/modal-confirm.component';
import { ModalMessageComponent } from 'src/app/modals/modal-message/modal-message.component';
import { ModalPopupComponent } from '../../modals/modal-popup/modal-popup.component';
//#endregion modals

//#region Sliders
import { SliderBaseComponent } from '../../sliders/slider-base/slider-base.component';
import { SliderCreateSpaceComponent } from '../../sliders/slider-create-space/slider-create-space.component';
import { HttpClient } from '@angular/common/http';
//#endregion

//#region Declarations
const declarations: any = [
  ButtonBaseComponent,
  ButtonIconFontAwesomeComponent,
  ButtonSvgComponent,
  FixedItemUserComponent,
  ModalConfirmComponent,
  ModalBaseComponent,
  ModalMessageComponent,
  ModalPopupComponent,
  PartialCopyrightComponent,
  PartialItemSwitchComponent,
  PartialLoadingComponent,
  PartialPaginationComponent,
  SliderBaseComponent,
  SliderCreateSpaceComponent,
];
//#endregion
//#region Imports
const imports: any = [
  CommonModule,
  RouterModule,
  FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule,
  DragScrollModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient],
    },
  }),
  ApolloModule,
];
//#endregion
@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [declarations, ...imports],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://api.optimizer.vn/query',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class ShareModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
