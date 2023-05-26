import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewPageComponent } from './main-view-page.component';

describe('MainViewPageComponent', () => {
  let component: MainViewPageComponent;
  let fixture: ComponentFixture<MainViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
