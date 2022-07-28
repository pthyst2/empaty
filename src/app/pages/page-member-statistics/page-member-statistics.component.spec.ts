import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberStatisticsComponent } from './page-member-statistics.component';

describe('PageMemberStatisticsComponent', () => {
  let component: PageMemberStatisticsComponent;
  let fixture: ComponentFixture<PageMemberStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
