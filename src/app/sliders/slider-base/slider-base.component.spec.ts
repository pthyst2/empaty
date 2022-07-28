import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBaseComponent } from './slider-base.component';

describe('SliderBaseComponent', () => {
  let component: SliderBaseComponent;
  let fixture: ComponentFixture<SliderBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
