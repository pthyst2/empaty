import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHeaderAuthComponent } from './partial-header-auth.component';

describe('PartialHeaderAuthComponent', () => {
  let component: PartialHeaderAuthComponent;
  let fixture: ComponentFixture<PartialHeaderAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialHeaderAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialHeaderAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
