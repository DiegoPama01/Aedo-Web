import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaItemCardComponent } from './odisea-item-card.component';

describe('OdiseaItemCardComponent', () => {
  let component: OdiseaItemCardComponent;
  let fixture: ComponentFixture<OdiseaItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
