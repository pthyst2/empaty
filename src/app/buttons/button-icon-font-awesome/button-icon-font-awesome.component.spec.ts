import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconFontAwesomeComponent } from './button-icon-font-awesome.component';

describe('ButtonIconFontAwesomeComponent', () => {
  let component: ButtonIconFontAwesomeComponent;
  let fixture: ComponentFixture<ButtonIconFontAwesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconFontAwesomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconFontAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
