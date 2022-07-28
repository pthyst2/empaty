import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSectionBaseComponent } from './partial-section-base.component';

describe('PartialSectionBaseComponent', () => {
  let component: PartialSectionBaseComponent;
  let fixture: ComponentFixture<PartialSectionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialSectionBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialSectionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
