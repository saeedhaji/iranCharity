import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsShowComponent } from './calendars-show.component';

describe('CalendarsShowComponent', () => {
  let component: CalendarsShowComponent;
  let fixture: ComponentFixture<CalendarsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
