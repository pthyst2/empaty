import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemCollabComponent } from './partial-item-collab.component';

describe('PartialItemCollabComponent', () => {
  let component: PartialItemCollabComponent;
  let fixture: ComponentFixture<PartialItemCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemCollabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
