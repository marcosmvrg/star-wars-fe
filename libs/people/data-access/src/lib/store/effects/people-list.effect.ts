import { Injectable } from '@angular/core';
import { StarWarsPeopleApiService } from '../../api/star-wars-people-api.service';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class PeopleListEffect {
  constructor(
    private actions$: Actions,
    private starWarsPeopleApiService: StarWarsPeopleApiService,
    private store: Store
  ) {}
}
