import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';

export const listRoutes: Route[] = [
  {
    path: '',
    component: PeopleListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(listRoutes)],
  declarations: [PeopleListComponent],
})
export class PeopleListModule {}
