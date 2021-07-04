import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  images: any[] = [
    { img: 'catalog.jpg', text: '2021', name: 'Product Catalog', assetlink: 'assets/catalog.pdf'},
    { vid: 'https://www.youtube.com/embed/4UNzRqGJ2Y0' },
    { img: '0.jpg', text: 'all-new', name: 'pyramid mini', link: 'products/unlimited/pyramid mini'},
    { img: '1.jpg', text: 'glow up', name: 'celesta', link: 'products/cases/celesta'},
    { img: '2.jpg', text: 'relentless', name: 'eclipse', link: 'products/cases/eclipse'},
    { vid: 'https://www.youtube.com/embed/A0C_RPKAZzQ' }
  ];

  constructor(private sanitizer: DomSanitizer, config: NgbCarouselConfig) {
    config.interval = 10000;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  sanitizeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
