import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { StarWarsPeopleApiService } from '@star-wars-fe/people-data-access';
import { People } from '@star-wars-fe/shared-model';

export const starWarsPeopleViewResolver: ResolveFn<People> = () => {
  const starWarsPeopleApiService = inject(StarWarsPeopleApiService);
  const router = inject(Router);
  const personUrl: string =
    router.getCurrentNavigation()?.extras?.state?.['personUrl'];

  return starWarsPeopleApiService.get(personUrl);
};
