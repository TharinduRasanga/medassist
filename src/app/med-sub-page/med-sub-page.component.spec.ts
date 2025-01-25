import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedSubPageComponent } from './med-sub-page.component';

describe('MedSubPageComponent', () => {
  let component: MedSubPageComponent;
  let fixture: ComponentFixture<MedSubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedSubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
