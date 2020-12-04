import { Component } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-browser',
  templateUrl: './product-browser.component.html',
  styleUrls: ['./product-browser.component.css']
})
export class ProductBrowserComponent {

  products: any[];
  type: string;

  constructor(private json: JsonService, private route: ActivatedRoute) {
    this.route.data.subscribe(type => {
      this.json.getJSON('assets/products/' + type.type + '/data.json').subscribe(data => {
        this.type = type.type;
        this.products = data;
      });
    });

  }

}
