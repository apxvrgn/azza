import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

class Product {
  name: string;
    desc: string;
    image: string;
    code: string;
    type: string;
    features: [];
    overview: string[];
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;
  path: string;

  constructor(private json: JsonService, private route: ActivatedRoute, config: NgbCarouselConfig) {
    config.interval = 10000;
    this.product = new Product();
    this.route.params.subscribe(product => {
      this.path = 'assets/products/' +  product.type + '/' + product.name;
      this.json.getJSON('assets/products/' +  product.type + '/' + product.name + '/data.json').subscribe(data => {
        this.product.name = data.name;
        this.product.code = data.code;
        this.product.type = data.type;
        this.product.features = data.features;
        this.product.overview = data.overview;
        console.log(this.product);
      });
    });
  }

  ngOnInit(): void {
  }

}
