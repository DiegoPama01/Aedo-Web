import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaDetailsMapCardComponent } from './odisea-details-map-card.component';

describe('OdiseaDetailsMapCardComponent', () => {
  let component: OdiseaDetailsMapCardComponent;
  let fixture: ComponentFixture<OdiseaDetailsMapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaDetailsMapCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaDetailsMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
