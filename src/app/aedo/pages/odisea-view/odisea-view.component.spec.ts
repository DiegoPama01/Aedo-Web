import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaViewComponent } from './odisea-view.component';

describe('OdiseaViewComponent', () => {
  let component: OdiseaViewComponent;
  let fixture: ComponentFixture<OdiseaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdiseaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
