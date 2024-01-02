import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { starWarsPeopleViewResolver } from './resolvers/people-view.resolver';
import { PeopleViewContainerComponent } from './components';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { people: starWarsPeopleViewResolver },
    component: PeopleViewContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PeopleViewContainerComponent],
})
export class PeopleViewModule {}
