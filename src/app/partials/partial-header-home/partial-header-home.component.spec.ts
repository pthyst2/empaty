import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHeaderHomeComponent } from './partial-header-home.component';

describe('PartialHeaderHomeComponent', () => {
  let component: PartialHeaderHomeComponent;
  let fixture: ComponentFixture<PartialHeaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialHeaderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialHeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
