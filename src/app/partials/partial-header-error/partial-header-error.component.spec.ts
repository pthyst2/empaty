import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHeaderErrorComponent } from './partial-header-error.component';

describe('PartialHeaderErrorComponent', () => {
  let component: PartialHeaderErrorComponent;
  let fixture: ComponentFixture<PartialHeaderErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialHeaderErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialHeaderErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
