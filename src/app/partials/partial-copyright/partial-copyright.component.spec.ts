import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialCopyrightComponent } from './partial-copyright.component';

describe('PartialCopyrightComponent', () => {
  let component: PartialCopyrightComponent;
  let fixture: ComponentFixture<PartialCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialCopyrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
