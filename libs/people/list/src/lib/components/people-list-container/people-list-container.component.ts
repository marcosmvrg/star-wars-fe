import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectStarWarsPeopleList } from '@star-wars-fe/people-data-access';

@Component({
  selector: 'sw-people-list',
  templateUrl: './people-list-container.component.html',
  styleUrls: ['./people-list-container.component.scss'],
})
export class PeopleListContainerComponent {
  readonly peopleList$ = this.store.select(selectStarWarsPeopleList);

  constructor(private store: Store) {}
}
