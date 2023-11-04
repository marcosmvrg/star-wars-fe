import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsPeopleApi } from './api/star-wars-people.api';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [StarWarsPeopleApi],
})
export class PeopleDataAccessModule {}
