import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSectionSpacesLargeComponent } from './partial-section-spaces-large.component';

describe('PartialSectionSpacesLargeComponent', () => {
  let component: PartialSectionSpacesLargeComponent;
  let fixture: ComponentFixture<PartialSectionSpacesLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialSectionSpacesLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialSectionSpacesLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
