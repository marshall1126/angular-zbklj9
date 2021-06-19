import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { products } from "../products";
import { securities } from "../securities";
import { ModalService } from "../_modal/modal.service";
import { MatTable } from '@angular/material/table';
import 'rxjs/add/observable/of';
import * as utilities from '../utilities';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  mySubscription: any;
  products = products;
  securities = securities;
  displayedColumns: string[] = [
    "actions",
    "position",
    "ticker",
    "weight",
    "pctg",
    "totrtn",
    "annrtn"
  ];
  dataSource = ELEMENT_DATA;
  dataSource2 = ASSET_CASH;
  share() {
    window.alert("The product has been shared!");
  }
  constructor(private modalService: ModalService) {}
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addRow(x) {
    console.log("Add row " + x);
  }
  
  calcWeight() {
    var sum = 0;
    for (let asset of ASSET_CASH) {
      if (asset.position > 1) sum += asset.weight;
    }
    /** return Object.keys(ASSET_CASH).length */
    return 1 - sum;
  }
  deleteRow(row: number) {
    ASSET_CASH.splice(row-1, 1);
    for (let item of ASSET_CASH) {
      if (item.position >= row) item.position--;
    }
    this.calcWeight();
    this.table.renderRows();
   }
   formatDec1(x: number) {
     return utilities.formatDec1(x);
   }
   formatDec2(x: number) {
     return utilities.formatDec2(x);
   }
  ngOnInit() {
  }
}

export interface AssetCash {
  position: number;
  ticker: string;
  weight: number;
  totrtn: number;
  pctg: string;
  annrtn: number;
}
export interface PeriodicElement {
  position: number;
  ticker: string;
  weight: number;
  totrtn: number;
  pctg: string;
  annrtn: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 2,
    ticker: "AAPL",
    weight: 59,
    pctg: "",
    totrtn: 0.4,
    annrtn: 0.4
  }
];

var ASSET_CASH: AssetCash[] = [
  {
    position: 1,
    ticker: "Cash",
    weight: 0.5,
    pctg: "%",
    totrtn: 0.3,
    annrtn: 0.4
  },
  {
    position: 2,
    ticker: "AAPL",
    weight: 0.52,
    pctg: "",
    totrtn: 0.4,
    annrtn: 0.4
  },{
    position: 3,
    ticker: "IBM",
    weight: 0.13,
    pctg: "",
    totrtn: 0.15,
    annrtn: 0.15
  }

];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
