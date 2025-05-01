import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedSpecializedClientCareComponent } from './med-specialized-client-care.component';

describe('MedSpecializedClientCareComponent', () => {
  let component: MedSpecializedClientCareComponent;
  let fixture: ComponentFixture<MedSpecializedClientCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedSpecializedClientCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedSpecializedClientCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
