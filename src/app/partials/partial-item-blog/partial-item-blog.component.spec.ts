import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemBlogComponent } from './partial-item-blog.component';

describe('PartialItemBlogComponent', () => {
  let component: PartialItemBlogComponent;
  let fixture: ComponentFixture<PartialItemBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
