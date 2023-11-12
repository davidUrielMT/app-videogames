import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGamesComponent } from './upcoming-games.component';

describe('UpcomingGamesComponent', () => {
  let component: UpcomingGamesComponent;
  let fixture: ComponentFixture<UpcomingGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingGamesComponent]
    });
    fixture = TestBed.createComponent(UpcomingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
