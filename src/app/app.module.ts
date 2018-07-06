import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { IssueComponent } from './issue/issue.component';
import { SearchComponent } from './search/search.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { OcticonDirective } from './octicon.directive';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'issue/:id', component: IssueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    SearchComponent,
    OcticonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
