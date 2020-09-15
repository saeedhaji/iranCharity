import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCharityComponent } from './core-charity.component';

describe('CoreCharityComponent', () => {
  let component: CoreCharityComponent;
  let fixture: ComponentFixture<CoreCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
