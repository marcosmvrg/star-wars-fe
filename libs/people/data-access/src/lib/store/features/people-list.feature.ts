import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { PeopleList } from '@star-wars-fe/shared-model';
import { starWarsPeopleApiActions } from '../actions/people-list-action';

export interface PeopleListState {
  peopleList: PeopleList;
}

export const initialPeopleListState: PeopleListState = {
  peopleList: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
};

export const starWarsPeopleListFeature = createFeature({
  name: 'starWarsPeopleList',
  reducer: createReducer(
    initialPeopleListState,
    on(
      starWarsPeopleApiActions.starWarsPeopleLoadedSuccess,
      (state, action): PeopleListState => {
        return {
          ...state,
          peopleList: action.payload,
        };
      }
    )
  ),
});

export const selectStarWarsPeopleList = createSelector({
  peopleList: starWarsPeopleListFeature.selectPeopleList,
});
