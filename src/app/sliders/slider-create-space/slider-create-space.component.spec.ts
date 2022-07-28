import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCreateSpaceComponent } from './slider-create-space.component';

describe('SliderCreateSpaceComponent', () => {
  let component: SliderCreateSpaceComponent;
  let fixture: ComponentFixture<SliderCreateSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCreateSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCreateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
