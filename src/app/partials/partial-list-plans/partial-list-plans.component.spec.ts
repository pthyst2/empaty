import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialListPlansComponent } from './partial-list-plans.component';

describe('PartialListPlansComponent', () => {
  let component: PartialListPlansComponent;
  let fixture: ComponentFixture<PartialListPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialListPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialListPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
