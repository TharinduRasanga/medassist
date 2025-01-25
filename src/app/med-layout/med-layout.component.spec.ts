import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedLayoutComponent } from './med-layout.component';

describe('MedLayoutComponent', () => {
  let component: MedLayoutComponent;
  let fixture: ComponentFixture<MedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
