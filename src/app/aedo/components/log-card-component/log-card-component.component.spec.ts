import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCardComponentComponent } from './log-card-component.component';

describe('LogCardComponentComponent', () => {
  let component: LogCardComponentComponent;
  let fixture: ComponentFixture<LogCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
