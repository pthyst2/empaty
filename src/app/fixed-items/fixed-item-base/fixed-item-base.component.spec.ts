import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedItemBaseComponent } from './fixed-item-base.component';

describe('FixedItemBaseComponent', () => {
  let component: FixedItemBaseComponent;
  let fixture: ComponentFixture<FixedItemBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedItemBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedItemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
