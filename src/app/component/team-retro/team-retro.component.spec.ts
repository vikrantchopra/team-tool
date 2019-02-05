import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRetroComponent } from './team-retro.component';

describe('TeamRetroComponent', () => {
  let component: TeamRetroComponent;
  let fixture: ComponentFixture<TeamRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
