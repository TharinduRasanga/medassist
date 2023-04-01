import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedMenuBarComponent } from './med-menu-bar.component';

describe('MedMenuBarComponent', () => {
  let component: MedMenuBarComponent;
  let fixture: ComponentFixture<MedMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
