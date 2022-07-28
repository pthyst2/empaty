import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialBannerHomeComponent } from './partial-banner-home.component';

describe('PartialBannerHomeComponent', () => {
  let component: PartialBannerHomeComponent;
  let fixture: ComponentFixture<PartialBannerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialBannerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialBannerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
