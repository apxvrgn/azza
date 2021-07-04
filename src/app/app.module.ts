import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBrowserComponent } from './product-browser/product-browser.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBrowserComponent,
    ProductPageComponent,
    ProductSpecificationComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
