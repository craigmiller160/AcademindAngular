import { NgModule } from '@angular/core';
import { RoutingUserComponent } from './other-lessons/servers-routing/routing-users/routing-user/routing-user.component';
import { RouterModule, Routes } from '@angular/router';
import { LogButtonClicksComponent } from './other-lessons/exercise3/log-button-clicks/log-button-clicks.component';
import { RoutingServersComponent } from './other-lessons/servers-routing/routing-servers/routing-servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsernameInterpolateComponent } from './other-lessons/exercise2/username-interpolate/username-interpolate.component';
import { RecipeViewComponent } from './recipe/recipe-view/recipe-view.component';
import { ServersComponent } from './other-lessons/lecture/servers/servers.component';
import { ControlComponent } from './other-lessons/show-numbers/control/control.component';
import { RoutingUsersComponent } from './other-lessons/servers-routing/routing-users/routing-users.component';
import { OtherLessons } from './other-lessons/OtherLessons';
import { AccountsAppComponent } from './other-lessons/accounts/accounts-app.component';
import { Exercise1Component } from './other-lessons/exercise1/exercise1.component';
import { CompsBindingDeepComponent } from './other-lessons/comps-binding-deep/comps-binding-deep.component';
import { ServersRoutingComponent } from './other-lessons/servers-routing/servers-routing.component';
import { RoutingHomeComponent } from './other-lessons/servers-routing/routing-home/routing-home.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RoutingServerComponent } from './other-lessons/servers-routing/routing-servers/routing-server/routing-server.component';
import { RoutingEditServerComponent } from './other-lessons/servers-routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { AuthGuard } from './other-lessons/servers-routing/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
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
            canActivate: [
              AuthGuard
            ],
            children: [
              {
                path: ':id',
                component: RoutingServerComponent
              },
              {
                path: ':id/edit',
                component: RoutingEditServerComponent
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'something',
    redirectTo: '/not-found' // This is a redirect to another URI
  },
  {
    path: '**', // This is a catch-all wildcard route. This must always be at the end
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
