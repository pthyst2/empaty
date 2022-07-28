import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialFooterHomeComponent } from './partial-footer-home.component';

describe('PartialFooterHomeComponent', () => {
  let component: PartialFooterHomeComponent;
  let fixture: ComponentFixture<PartialFooterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialFooterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialFooterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
