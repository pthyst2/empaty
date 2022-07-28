import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialFooterAuthComponent } from './partial-footer-auth.component';

describe('PartialFooterAuthComponent', () => {
  let component: PartialFooterAuthComponent;
  let fixture: ComponentFixture<PartialFooterAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialFooterAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialFooterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
