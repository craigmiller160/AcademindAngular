import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEditServerComponent } from './routing-edit-server.component';

describe('RoutingEditServerComponent', () => {
  let component: RoutingEditServerComponent;
  let fixture: ComponentFixture<RoutingEditServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingEditServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingEditServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
