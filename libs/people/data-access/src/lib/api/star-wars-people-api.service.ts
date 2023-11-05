import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleList } from '@star-wars-fe/shared-model';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class StarWarsPeopleApiService {
  private readonly baseUrl = `${environment.API_STAR_WARS_URL}`;

  constructor(private httpClient: HttpClient) {}

  list(): Observable<PeopleList> {
    return this.httpClient.get<PeopleList>(`${this.baseUrl}/people`);
  }
}
