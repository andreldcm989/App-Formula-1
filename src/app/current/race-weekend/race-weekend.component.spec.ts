import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceWeekendComponent } from './race-weekend.component';

describe('RaceWeekendComponent', () => {
  let component: RaceWeekendComponent;
  let fixture: ComponentFixture<RaceWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceWeekendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
