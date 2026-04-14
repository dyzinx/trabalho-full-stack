import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryStatusComponent } from './delivery-status.component';
import { Location } from '@angular/common';

describe('DeliveryStatusComponent', () => {
  let component: DeliveryStatusComponent;
  let fixture: ComponentFixture<DeliveryStatusComponent>;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      imports: [DeliveryStatusComponent],
      providers: [
        { provide: Location, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryStatusComponent);
    component = fixture.componentInstance;
    locationSpy = TestBed.inject(Location) as jasmine.SpyObj<Location>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call location.back() when goBack is called', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });
});
