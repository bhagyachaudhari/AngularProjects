import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrorpageComponent } from './customerrorpage.component';

describe('CustomerrorpageComponent', () => {
  let component: CustomerrorpageComponent;
  let fixture: ComponentFixture<CustomerrorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
