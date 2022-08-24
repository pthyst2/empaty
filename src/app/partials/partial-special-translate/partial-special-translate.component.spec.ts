import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSpecialTranslateComponent } from './partial-special-translate.component';

describe('PartialSpecialTranslateComponent', () => {
  let component: PartialSpecialTranslateComponent;
  let fixture: ComponentFixture<PartialSpecialTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialSpecialTranslateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialSpecialTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
