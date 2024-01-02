import { Component, EventEmitter, Input, Output } from '@angular/core';
import { People } from '@star-wars-fe/shared-model';

@Component({
  selector: 'sw-people-list-table',
  templateUrl: './people-list-table.component.html',
  styleUrls: ['./people-list-table.component.scss'],
})
export class PeopleListTableComponent {
  readonly displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
    'created',
    'edited',
  ];

  @Input() results: People[] = [];
  @Output() view = new EventEmitter<string>();
}
