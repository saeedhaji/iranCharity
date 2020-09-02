import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsAddComponent } from './sponsors-add.component';

describe('SponsorsAddComponent', () => {
  let component: SponsorsAddComponent;
  let fixture: ComponentFixture<SponsorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
