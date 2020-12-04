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
    { img: '0.jpg', text: 'all-new', name: 'pyramid mini', link: 'products/unlimited/pyramid mini'},
    { img: '1.jpg', text: 'glow up', name: 'celesta', link: 'products/cases/celesta'},
    { img: '2.jpg', text: 'relentless', name: 'eclipse', link: 'products/cases/eclipse'},
    { vid: 'https://www.youtube.com/watch?v=Es9w4Ja1GFM' }
  ];

  constructor(private sanitizer: DomSanitizer, config: NgbCarouselConfig) {
    config.interval = 10000;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  test() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Es9w4Ja1GFM');
  }

}
