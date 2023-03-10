import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaProfileComponent } from './odisea-profile.component';

describe('OdiseaProfileComponent', () => {
  let component: OdiseaProfileComponent;
  let fixture: ComponentFixture<OdiseaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
