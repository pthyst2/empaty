import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorAuthenticationComponent } from './page-error-authentication.component';

describe('PageErrorAuthenticationComponent', () => {
  let component: PageErrorAuthenticationComponent;
  let fixture: ComponentFixture<PageErrorAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageErrorAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageErrorAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
