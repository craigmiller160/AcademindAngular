import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInterpolateComponent } from './username-interpolate.component';

describe('UsernameInterpolateComponent', () => {
  let component: UsernameInterpolateComponent;
  let fixture: ComponentFixture<UsernameInterpolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameInterpolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameInterpolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
