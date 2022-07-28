import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemFunctionComponent } from './partial-item-function.component';

describe('PartialItemFunctionComponent', () => {
  let component: PartialItemFunctionComponent;
  let fixture: ComponentFixture<PartialItemFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
