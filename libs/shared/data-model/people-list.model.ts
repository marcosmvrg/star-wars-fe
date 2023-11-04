import { People } from './people.model';

export interface PeopleList {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
