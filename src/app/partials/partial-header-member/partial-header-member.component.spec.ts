import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHeaderMemberComponent } from './partial-header-member.component';

describe('PartialHeaderMemberComponent', () => {
  let component: PartialHeaderMemberComponent;
  let fixture: ComponentFixture<PartialHeaderMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialHeaderMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialHeaderMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
