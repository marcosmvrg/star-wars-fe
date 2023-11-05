import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { starWarsPeopleListFeature } from './store/features/people-list.feature';
import { PeopleListEffect } from './store/effects/people-list.effect';
import { StarWarsPeopleApiService } from './api/star-wars-people-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(starWarsPeopleListFeature),
    EffectsModule.forFeature([PeopleListEffect]),
  ],
  providers: [StarWarsPeopleApiService],
})
export class PeopleDataAccessModule {}
