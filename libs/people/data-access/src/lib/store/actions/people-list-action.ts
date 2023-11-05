import { createActionGroup, props } from '@ngrx/store';
import { PeopleList } from '@star-wars-fe/shared-model';

export const starWarsPeopleApiActions = createActionGroup({
  source: 'Star Wars People API',
  events: {
    'Star Wars People Loaded Success': props<{ payload: PeopleList }>(),
    'Star Wars People Loaded Failure': props<{ errorMsg: string }>(),
  },
});
