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
import { ControlComponent } from './other-lessons/show-numbers/control/control.component';
import { BasicHighlightDirective } from './other-lessons/show-numbers/control/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './other-lessons/show-numbers/control/better-highlight/better-highlight.directive';
import { UnlessDirective } from './other-lessons/show-numbers/control/unless/unless.directive';
import { DropdownDirective } from './directive/dropdown.directive';
import { AccountsAppComponent } from './other-lessons/accounts/accounts-app.component';
import { AccountComponent } from './other-lessons/accounts/account/account.component';
import { NewAccountComponent } from './other-lessons/accounts/new-account/new-account.component';
import { AccountsService } from './other-lessons/accounts/accounts.service';
import { LoggingService } from './other-lessons/accounts/logging.service';
import { RecipeService } from './service/recipe.service';
import { ShoppingService } from './service/shopping.service';
import { ServersRoutingComponent } from './other-lessons/servers-routing/servers-routing.component';
import { RoutingHomeComponent } from './other-lessons/servers-routing/routing-home/routing-home.component';
import { RoutingUsersComponent } from './other-lessons/servers-routing/routing-users/routing-users.component';
import { RoutingServersComponent } from './other-lessons/servers-routing/routing-servers/routing-servers.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingEditServerComponent } from './other-lessons/servers-routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './other-lessons/servers-routing/routing-servers/routing-server/routing-server.component';
import { RoutingServersService } from './other-lessons/servers-routing/routing-servers/routing-servers.service';
import { RoutingUserComponent } from './other-lessons/servers-routing/routing-users/routing-user/routing-user.component';
import { Exercise1Component } from './other-lessons/exercise1/exercise1.component';
import { OtherLessons } from './other-lessons/OtherLessons';

const headerRoutes: Routes = [
  {
    path: '',
    component: RecipeViewComponent
  },
  {
    path: 'recipes',
    component: RecipeViewComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'other-lessons',
    children: [
      {
        path: '',
        component: ServersComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[0].path,
        component: ServersComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[1].path,
        component: Exercise1Component
      },
      {
        path: OtherLessons.OTHER_LESSONS[2].path,
        component: UsernameInterpolateComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[3].path,
        component: LogButtonClicksComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[4].path,
        component: CompsBindingDeepComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[5].path,
        component: ControlComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[6].path,
        component: AccountsAppComponent
      },
      {
        path: OtherLessons.OTHER_LESSONS[7].path,
        component: ServersRoutingComponent,
        children: [
          {
            path: '',
            component: RoutingHomeComponent
          },
          {
            path: 'users',
            component: RoutingUsersComponent,
            children: [
              {
                path: ':id/:name',
                component: RoutingUserComponent
              }
            ]
          },
          {
            path: 'servers',
            component: RoutingServersComponent,
            children: [
              {
                path: ':id',
                component: RoutingServerComponent,
                children: [
                  {
                    path: 'edit', // TODO might want to move this up a level
                    component: RoutingEditServerComponent
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

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
    ControlComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountsAppComponent,
    AccountComponent,
    NewAccountComponent,
    ServersRoutingComponent,
    RoutingHomeComponent,
    RoutingUsersComponent,
    RoutingServersComponent,
    RoutingEditServerComponent,
    RoutingServerComponent,
    RoutingUserComponent,
    Exercise1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(headerRoutes)
  ],
  providers: [
    AccountsService,
    LoggingService,
    RecipeService,
    ShoppingService,
    RoutingServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
