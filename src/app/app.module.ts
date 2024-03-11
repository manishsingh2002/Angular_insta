import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './card/card.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { ProfdetailComponent } from './profdetail/profdetail.component';
// import { instagramResponse } from './instajason';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardComponent,
    ProfilepictureComponent,
    ProfdetailComponent,
    // instagramResponse,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
