import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaFormComponent } from './odisea-form.component';

describe('OdiseaFormComponent', () => {
  let component: OdiseaFormComponent;
  let fixture: ComponentFixture<OdiseaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
