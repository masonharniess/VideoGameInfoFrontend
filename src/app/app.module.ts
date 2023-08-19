import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DeveloperModule } from './developer-module/developer.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { DeveloperListComponent } from './developer-list/developer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      // {path: 'developers', component: DeveloperListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]),
    FontAwesomeModule,
    DeveloperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
