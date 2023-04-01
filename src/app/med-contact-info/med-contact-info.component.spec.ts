import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedContactInfoComponent } from './med-contact-info.component';

describe('MedContactInfoComponent', () => {
  let component: MedContactInfoComponent;
  let fixture: ComponentFixture<MedContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
