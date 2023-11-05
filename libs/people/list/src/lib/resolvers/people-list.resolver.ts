import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  StarWarsPeopleApiService,
  starWarsPeopleApiActions,
} from '@star-wars-fe/people-data-access';
import { PeopleList } from '@star-wars-fe/shared-model';
import { tap } from 'rxjs';

export const starWarsPeopleListResolver: ResolveFn<PeopleList> = () => {
  const store: Store = inject(Store);
  const starWarsPeopleApiService = inject(StarWarsPeopleApiService);

  return starWarsPeopleApiService.list().pipe(
    tap((response) =>
      store.dispatch(
        starWarsPeopleApiActions.starWarsPeopleLoadedSuccess({
          payload: response,
        })
      )
    )
  );
};
