import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersRoutingComponent } from './servers-routing.component';

describe('ServersRoutingComponent', () => {
  let component: ServersRoutingComponent;
  let fixture: ComponentFixture<ServersRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
