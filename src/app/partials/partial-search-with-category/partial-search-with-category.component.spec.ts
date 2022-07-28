import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSearchWithCategoryComponent } from './partial-search-with-category.component';

describe('PartialSearchWithCategoryComponent', () => {
  let component: PartialSearchWithCategoryComponent;
  let fixture: ComponentFixture<PartialSearchWithCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialSearchWithCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialSearchWithCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
