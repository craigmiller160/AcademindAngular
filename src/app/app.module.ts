import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './other-lessons/lecture/server/server.component';
import { ServersComponent } from './other-lessons/lecture/servers/servers.component';
import { WarningAlertComponent } from './other-lessons/exercise1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './other-lessons/exercise1/success-alert/success-alert.component';
import { TabsComponent } from './other-lessons/tabs/tabs.component';
import { UsernameInterpolateComponent } from './other-lessons/exercise2/username-interpolate/username-interpolate.component';
import { LogButtonClicksComponent } from './other-lessons/exercise3/log-button-clicks/log-button-clicks.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeViewComponent } from './recipe/recipe-view/recipe-view.component';
import { CompsBindingDeepComponent } from './other-lessons/comps-binding-deep/comps-binding-deep.component';
import { CockpitComponent } from './other-lessons/comps-binding-deep/cockpit/cockpit.component';
import { ServerElementComponent } from './other-lessons/comps-binding-deep/server-element/server-element.component';


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
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeViewComponent,
    CompsBindingDeepComponent,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
