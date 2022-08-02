import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSidebarSettingComponent } from './partial-sidebar-setting.component';

describe('PartialSidebarSettingComponent', () => {
  let component: PartialSidebarSettingComponent;
  let fixture: ComponentFixture<PartialSidebarSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialSidebarSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialSidebarSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
