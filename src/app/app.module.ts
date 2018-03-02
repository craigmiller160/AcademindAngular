import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './older-lessons/lecture/server/server.component';
import { ServersComponent } from './older-lessons/lecture/servers/servers.component';
import { WarningAlertComponent } from './older-lessons/exercise1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './older-lessons/exercise1/success-alert/success-alert.component';
import { TabsComponent } from './older-lessons/tabs/tabs.component';
import { UsernameInterpolateComponent } from './older-lessons/exercise2/username-interpolate/username-interpolate.component';
import { LogButtonClicksComponent } from './older-lessons/exercise3/log-button-clicks/log-button-clicks.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TabsComponent,
    UsernameInterpolateComponent,
    LogButtonClicksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
