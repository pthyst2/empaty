import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedItemMultiLanguagesComponent } from './fixed-item-multi-languages.component';

describe('FixedItemMultiLanguagesComponent', () => {
  let component: FixedItemMultiLanguagesComponent;
  let fixture: ComponentFixture<FixedItemMultiLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedItemMultiLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedItemMultiLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
