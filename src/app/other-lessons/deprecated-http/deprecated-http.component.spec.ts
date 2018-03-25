import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprecatedHttpComponent } from './deprecated-http.component';

describe('DeprecatedHttpComponent', () => {
  let component: DeprecatedHttpComponent;
  let fixture: ComponentFixture<DeprecatedHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeprecatedHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprecatedHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
