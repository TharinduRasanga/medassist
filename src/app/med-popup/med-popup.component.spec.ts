import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPopupComponent } from './med-popup.component';

describe('MedPopupComponent', () => {
  let component: MedPopupComponent;
  let fixture: ComponentFixture<MedPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
