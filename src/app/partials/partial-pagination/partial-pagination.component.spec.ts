import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialPaginationComponent } from './partial-pagination.component';

describe('PartialPaginationComponent', () => {
  let component: PartialPaginationComponent;
  let fixture: ComponentFixture<PartialPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
