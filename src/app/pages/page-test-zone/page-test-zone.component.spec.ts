import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestZoneComponent } from './page-test-zone.component';

describe('PageTestZoneComponent', () => {
  let component: PageTestZoneComponent;
  let fixture: ComponentFixture<PageTestZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTestZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTestZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
