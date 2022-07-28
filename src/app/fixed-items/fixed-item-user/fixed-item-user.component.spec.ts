import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedItemUserComponent } from './fixed-item-user.component';

describe('FixedItemUserComponent', () => {
  let component: FixedItemUserComponent;
  let fixture: ComponentFixture<FixedItemUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixedItemUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FixedItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
