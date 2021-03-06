//Core Imports
import {
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

//AHJ: remove after server is available
/*import {
  HttpClientInMemoryWebApiModule
} from 'angular-in-memory-web-api';*/


//Application Imports
import {
  AppComponent
} from './app.component';

import {
  AppRoutingModule
} from './app-routing.module';

import {
  GeneralModule
} from 'general/general.module';

import {
  LogInComponent
} from 'log-in/log-in.component';

import {
  BadgeService,
  CommentPostService,
  ItemService,
  PageService,
  QuestService,
  SectionService,
  UserService
} from 'shared/services';

//AHJ: remove after server is working
/*import {
  InMemoryDataService
} from './shared/services';*/

import {
  SharedModule
} from './shared/shared.module';

import {
  SignUpComponent
} from 'sign-up/sign-up.component';

import {
  SpecificModule
} from 'specific/specific.module';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    GeneralModule,
    SpecificModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  providers: [
    BadgeService,
    CommentPostService,
    QuestService,
    PageService,
    SectionService,
    UserService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
