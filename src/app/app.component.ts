import { Component, Injectable } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { securities } from './securities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  securities = securities;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/