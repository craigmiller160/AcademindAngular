import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogButtonClicksComponent } from './log-button-clicks.component';

describe('LogButtonClicksComponent', () => {
  let component: LogButtonClicksComponent;
  let fixture: ComponentFixture<LogButtonClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogButtonClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogButtonClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
