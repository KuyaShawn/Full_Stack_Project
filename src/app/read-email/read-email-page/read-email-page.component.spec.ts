import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEmailPageComponent } from './read-email-page.component';

describe('ReadEmailPageComponent', () => {
  let component: ReadEmailPageComponent;
  let fixture: ComponentFixture<ReadEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEmailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
