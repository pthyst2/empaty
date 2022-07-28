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

@NgModule({
  declarations: [AppComponent, PageTestZoneComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
