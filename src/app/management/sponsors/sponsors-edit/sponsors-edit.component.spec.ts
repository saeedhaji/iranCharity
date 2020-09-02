import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsEditComponent } from './sponsors-edit.component';

describe('SponsorsEditComponent', () => {
  let component: SponsorsEditComponent;
  let fixture: ComponentFixture<SponsorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
