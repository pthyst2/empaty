import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialLangStringComponent } from './partial-lang-string.component';

describe('PartialLangStringComponent', () => {
  let component: PartialLangStringComponent;
  let fixture: ComponentFixture<PartialLangStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialLangStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialLangStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
