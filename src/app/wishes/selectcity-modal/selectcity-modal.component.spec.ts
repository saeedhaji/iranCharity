import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcityModalComponent } from './selectcity-modal.component';

describe('SelectcityModalComponent', () => {
  let component: SelectcityModalComponent;
  let fixture: ComponentFixture<SelectcityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
