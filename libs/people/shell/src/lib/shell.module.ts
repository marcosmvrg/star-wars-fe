import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PeopleShellComponent } from './people-shell.component';
import { PeopleDataAccessModule } from '@star-wars-fe/people-data-access';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: PeopleShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@star-wars-fe/people-list').then((m) => m.PeopleListModule),
      },
      {
        path: 'view',
        loadChildren: () =>
          import('@star-wars-fe/people-view').then((m) => m.PeopleViewModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shellRoutes),
    PeopleDataAccessModule,
  ],
  declarations: [PeopleShellComponent],
})
export class ShellModule {}
