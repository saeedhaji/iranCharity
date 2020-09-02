import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsEditComponent } from './calendars-edit.component';

describe('CalendarsEditComponent', () => {
  let component: CalendarsEditComponent;
  let fixture: ComponentFixture<CalendarsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
