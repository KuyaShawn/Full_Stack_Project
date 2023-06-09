import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserHomeComponent } from './end-user-home.component';

describe('EndUserHomeComponent', () => {
  let component: EndUserHomeComponent;
  let fixture: ComponentFixture<EndUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
