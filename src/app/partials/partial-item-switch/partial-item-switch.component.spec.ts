import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemSwitchComponent } from './partial-item-switch.component';

describe('PartialItemSwitchComponent', () => {
  let component: PartialItemSwitchComponent;
  let fixture: ComponentFixture<PartialItemSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
