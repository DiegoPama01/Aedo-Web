import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaProfileOdiseoComponent } from './odisea-profile-odiseo.component';

describe('OdiseaProfileOdiseoComponent', () => {
  let component: OdiseaProfileOdiseoComponent;
  let fixture: ComponentFixture<OdiseaProfileOdiseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaProfileOdiseoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaProfileOdiseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
