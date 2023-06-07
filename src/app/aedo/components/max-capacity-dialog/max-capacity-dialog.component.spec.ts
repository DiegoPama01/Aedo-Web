import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCapacityDialogComponent } from './max-capacity-dialog.component';

describe('MaxCapacityDialogComponent', () => {
  let component: MaxCapacityDialogComponent;
  let fixture: ComponentFixture<MaxCapacityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxCapacityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxCapacityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
