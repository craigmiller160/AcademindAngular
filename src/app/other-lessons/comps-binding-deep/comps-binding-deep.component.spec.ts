import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsBindingDeepComponent } from './comps-binding-deep.component';

describe('CompsBindingDeepComponent', () => {
  let component: CompsBindingDeepComponent;
  let fixture: ComponentFixture<CompsBindingDeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsBindingDeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsBindingDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
