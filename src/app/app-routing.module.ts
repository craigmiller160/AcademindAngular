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
import { CanDeactivateGuard } from './other-lessons/servers-routing/routing-servers/routing-edit-server/can-deactivate-guard.service';
import { RoutingErrorPageComponent } from './other-lessons/servers-routing/routing-error-page/routing-error-page.component';
import { ServerResolver } from './other-lessons/servers-routing/routing-servers/routing-server/server-resolver.service';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ObservablesComponent } from './other-lessons/observables/observables.component';
import { ObservableHomeComponent } from './other-lessons/observables/observable-home/observable-home.component';
import { ObservableUserComponent } from './other-lessons/observables/observable-user/observable-user.component';
import { FormsComponent } from './other-lessons/forms/forms.component';

const serversRoutingRoutes = {
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
      canActivateChild: [
        AuthGuard
      ],
      children: [
        {
          path: ':id',
          component: RoutingServerComponent,
          resolve: {
            server: ServerResolver
          }
        },
        {
          path: ':id/edit',
          component: RoutingEditServerComponent,
          canDeactivate: [
            CanDeactivateGuard
          ]
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'not-found'
    },
    {
      path: 'not-found',
      component: RoutingErrorPageComponent,
      data: {
        message: 'Page not found!'
      }
    }
  ]
};

const otherLessonsRoutes = {
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
    serversRoutingRoutes,
    {
      path: OtherLessons.OTHER_LESSONS[8].path,
      component: ObservablesComponent,
      children: [
        {
          path: '',
          component: ObservableHomeComponent
        },
        {
          path: 'user/:id',
          component: ObservableUserComponent
        }
      ]
    },
    {
      path: OtherLessons.OTHER_LESSONS[9].path,
      component: FormsComponent
    }
  ]
};

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeViewComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  otherLessonsRoutes,
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
