import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialListPublicSpacesComponent } from './partial-list-public-spaces.component';

describe('PartialListPublicSpacesComponent', () => {
  let component: PartialListPublicSpacesComponent;
  let fixture: ComponentFixture<PartialListPublicSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialListPublicSpacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialListPublicSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
