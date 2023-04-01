import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedOurServicesSmComponent } from './med-our-services-sm.component';

describe('MedOurServicesSmComponent', () => {
  let component: MedOurServicesSmComponent;
  let fixture: ComponentFixture<MedOurServicesSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedOurServicesSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedOurServicesSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
