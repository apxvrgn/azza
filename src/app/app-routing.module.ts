import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductBrowserComponent } from './product-browser/product-browser.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cases', component: ProductBrowserComponent, data: { type : 'cases' } },
  { path: 'unlimited', component: ProductBrowserComponent, data: { type : 'unlimited' } },
  { path: 'power supplies', component: ProductBrowserComponent, data: { type : 'power supplies' } },
  { path: 'fans', component: ProductBrowserComponent, data: { type : 'fans' } },
  { path: 'liquid coolers', component: ProductBrowserComponent, data: { type : 'liquid coolers' } },
  { path: 'accessories', component: ProductBrowserComponent, data: { type: 'accessories' } },
  { path: 'products/:type/:name', component: ProductPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'buy', component: BuyPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
