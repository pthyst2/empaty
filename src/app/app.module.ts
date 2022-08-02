//#region Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './modules/share/share.module';
//#endregion

//#region Components
import { AppComponent } from './app.component';
import { PageTestZoneComponent } from './pages/page-test-zone/page-test-zone.component';
//#endregion

//#region Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from './interceptors/response.interceptor';
//#endregion
@NgModule({
  declarations: [AppComponent, PageTestZoneComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
