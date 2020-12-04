import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductBrowserComponent } from './product-browser.component';

describe('ProductBrowserComponent', () => {
  let component: ProductBrowserComponent;
  let fixture: ComponentFixture<ProductBrowserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
