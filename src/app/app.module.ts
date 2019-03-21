import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObraListComponent } from './modules/Obra/obra-list/obra-list.component';
import { CustomHeaderComponent } from './modules/custom-header/custom-header.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ObraListComponent,
    CustomHeaderComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
