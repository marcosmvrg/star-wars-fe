import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PeopleListContainerComponent } from './components/people-list-container/people-list-container.component';
import { PeopleListTableComponent } from './components/people-list-table/people-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { starWarsPeopleListResolver } from './resolvers/people-list.resolver';

export const listRoutes: Route[] = [
  {
    path: '',
    resolve: [starWarsPeopleListResolver],
    component: PeopleListContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(listRoutes), MatTableModule],
  declarations: [PeopleListContainerComponent, PeopleListTableComponent],
})
export class PeopleListModule {}
