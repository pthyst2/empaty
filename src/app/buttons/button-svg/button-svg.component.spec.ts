import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSvgComponent } from './button-svg.component';

describe('ButtonSvgComponent', () => {
  let component: ButtonSvgComponent;
  let fixture: ComponentFixture<ButtonSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
