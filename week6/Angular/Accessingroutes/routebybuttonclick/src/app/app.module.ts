import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { DetailsComponent } from './details/details.component';
import { WrongComponent } from './wrong/wrong.component';

@NgModule({
  declarations: [
    AppComponent,
    NewHomeComponent,
    DetailsComponent,
    WrongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
