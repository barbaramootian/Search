import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MyRoutingModule } from './my-routing/my-routing.module';
import { TimePassedPipe } from './time-passed.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MyRepoComponent } from './my-repo/my-repo.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TimePassedPipe,
    HighlightDirective,
    NavComponent,
    UserDataComponent,
    MyRepoComponent,
    WrongPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
