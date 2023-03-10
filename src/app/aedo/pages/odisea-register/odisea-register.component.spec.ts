import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaRegisterComponent } from './odisea-register.component';

describe('OdiseaRegisterComponent', () => {
  let component: OdiseaRegisterComponent;
  let fixture: ComponentFixture<OdiseaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
