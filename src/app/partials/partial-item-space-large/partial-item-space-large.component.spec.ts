import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemSpaceLargeComponent } from './partial-item-space-large.component';

describe('PartialItemSpaceLargeComponent', () => {
  let component: PartialItemSpaceLargeComponent;
  let fixture: ComponentFixture<PartialItemSpaceLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartialItemSpaceLargeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartialItemSpaceLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
