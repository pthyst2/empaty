import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateSpaceByImageComponent } from './modal-create-space-by-image.component';

describe('ModalCreateSpaceByImageComponent', () => {
  let component: ModalCreateSpaceByImageComponent;
  let fixture: ComponentFixture<ModalCreateSpaceByImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateSpaceByImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateSpaceByImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
