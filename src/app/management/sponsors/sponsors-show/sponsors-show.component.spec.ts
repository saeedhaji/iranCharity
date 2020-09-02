import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsShowComponent } from './sponsors-show.component';

describe('SponsorsShowComponent', () => {
  let component: SponsorsShowComponent;
  let fixture: ComponentFixture<SponsorsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
