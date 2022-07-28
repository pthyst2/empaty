import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSectionSpacesComponent } from './partial-section-spaces.component';

describe('PartialSectionScenesComponent', () => {
  let component: PartialSectionSpacesComponent;
  let fixture: ComponentFixture<PartialSectionSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartialSectionSpacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartialSectionSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
