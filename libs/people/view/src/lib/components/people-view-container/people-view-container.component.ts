import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '@star-wars-fe/shared-model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'star-wars-fe-people-view-container',
  templateUrl: './people-view-container.component.html',
  styleUrls: ['./people-view-container.component.scss'],
})
export class PeopleViewContainerComponent {
  people: Observable<People> = this.activatedRoute.data.pipe(
    map((value) => value['people'])
  );

  constructor(private activatedRoute: ActivatedRoute) {}
}
