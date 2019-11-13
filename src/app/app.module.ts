import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessNotificationComponent } from './success-notification/success-notification.component';
import {WarningNotificationComponent} from './warning-notification/warning-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessNotificationComponent,
    WarningNotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
