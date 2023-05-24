import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaProfileDetailsComponent } from './odisea-profile-details.component';

describe('OdiseaProfileDetailsComponent', () => {
  let component: OdiseaProfileDetailsComponent;
  let fixture: ComponentFixture<OdiseaProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
