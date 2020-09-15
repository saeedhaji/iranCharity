import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWishComponent } from './card-wish.component';

describe('CardListComponent', () => {
  let component: CardWishComponent;
  let fixture: ComponentFixture<CardWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
