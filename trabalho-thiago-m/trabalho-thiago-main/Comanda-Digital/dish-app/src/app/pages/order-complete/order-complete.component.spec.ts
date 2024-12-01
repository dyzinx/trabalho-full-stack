import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCompleteComponent } from './order-complete.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('OrderCompleteComponent', () => {
  let component: OrderCompleteComponent;
  let fixture: ComponentFixture<OrderCompleteComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let locationSpy = { back: jasmine.createSpy('back') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCompleteComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: Location, useValue: locationSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });

  it('should navigate to next page when goNext is called', () => {
    component.goNext();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/next-route']);
  });
});
