import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingErrorPageComponent } from './routing-error-page.component';

describe('RoutingErrorPageComponent', () => {
  let component: RoutingErrorPageComponent;
  let fixture: ComponentFixture<RoutingErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
