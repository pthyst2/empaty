import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemPublicSpaceComponent } from './partial-item-public-space.component';

describe('PartialItemPublicSpaceComponent', () => {
  let component: PartialItemPublicSpaceComponent;
  let fixture: ComponentFixture<PartialItemPublicSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemPublicSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemPublicSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
