import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import {
  RouterState,
  StoreRouterConnectingModule,
  routerReducer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

export interface AppState {
  [key: string]: unknown;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const appRoutes: Route[] = [
  {
    path: 'people',
    loadChildren: () =>
      import('@star-wars-fe/people-shell').then((m) => m.ShellModule),
  },
];

@NgModule({
  declarations: [AppComponent, MenuNavigationComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      trace: true,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
