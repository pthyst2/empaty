import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemSpaceComponent } from './partial-item-space.component';

describe('PartialItemSpaceComponent', () => {
  let component: PartialItemSpaceComponent;
  let fixture: ComponentFixture<PartialItemSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartialItemSpaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartialItemSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
