//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
import { LayoutErrorRoutingModule } from './layout-error-routing.module';
//#endregion
//#region Components
import { LayoutErrorComponent } from './layout-error.component';
import { PageErrorAuthenticationComponent } from 'src/app/pages/page-error-authentication/page-error-authentication.component';
import { PageErrorNotFoundComponent } from 'src/app/pages/page-error-not-found/page-error-not-found.component';
import { PartialHeaderErrorComponent } from '../../partials/partial-header-error/partial-header-error.component';
//#endregion
@NgModule({
  declarations: [
    LayoutErrorComponent,
    PageErrorAuthenticationComponent,
    PageErrorNotFoundComponent,
    PartialHeaderErrorComponent,
  ],
  imports: [CommonModule, LayoutErrorRoutingModule, ShareModule],
})
export class LayoutErrorModule {}
