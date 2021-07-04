import { Component, OnInit, Input } from '@angular/core';
import { XlsxService } from '../xlsx.service';
import * as XLSX from 'xlsx';

interface Row {
  a: string;
  b: string;
}
export class Data {
  name: string;
  rows: Row[];

  constructor(n: string) {
      this.name = n;
      this.rows = [];
  }
}

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.css']
})
export class ProductSpecificationComponent implements OnInit {

  @Input('path') path;
  data: Data[];
  sheets: [];

  constructor(private xlsx: XlsxService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.xlsx.getFile(this.path).subscribe(data => {
      let xl = XLSX.read(data, {type:'array'});
      for (let d of xl.SheetNames) {
        this.data.push(new Data(d));
        let range = XLSX.utils.decode_range(xl.Sheets[d]["!ref"]);
        for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
          const firstCell = xl.Sheets[d][XLSX.utils.encode_cell({r: rowNum, c: 0})];
          const secondCell = xl.Sheets[d][XLSX.utils.encode_cell({r: rowNum, c: 1})];
          if (firstCell != undefined && secondCell != undefined) {
            this.data[this.data.length-1].rows.push({ a: firstCell.v, b: secondCell.v});
          }
        }
      }
    });
  }
}
