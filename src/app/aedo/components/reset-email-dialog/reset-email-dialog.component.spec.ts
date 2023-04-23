import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetEmailDialogComponent } from './reset-email-dialog.component';

describe('ResetEmailDialogComponent', () => {
  let component: ResetEmailDialogComponent;
  let fixture: ComponentFixture<ResetEmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetEmailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
