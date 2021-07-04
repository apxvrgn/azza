import { Component, OnInit } from '@angular/core';
import { XlsxService } from '../xlsx.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  data: any[];
  selected_region: string = 'Northern America';
  constructor(private xlsx: XlsxService) {
    this.data = [];
    this.xlsx.getFile('./assets/stores.xlsx').subscribe(data => {
      let xl = XLSX.read(data, {type:'array'});
      for (let s of xl.SheetNames) {
        this.data.push({ region: s, data: [] });
        let range = XLSX.utils.decode_range(xl.Sheets[s]["!ref"]).e.r;
        for (let i = 1; i <= range; ++i) {
          if (xl.Sheets[s]['A'+i]) {
            this.data[this.data.length-1].data.push({ country: xl.Sheets[s]['A'+i].v, url: xl.Sheets[s]['B'+i].v, image: xl.Sheets[s]['C'+i].v});

          }
        }
      }
    });
  }
  

  ngOnInit(): void {
  }

  OpenPage(event: Event) {
    window.open((<HTMLImageElement>event.currentTarget).alt);
  }

  UpdateRegion(value: string) {
    this.selected_region = value;
  }
}
