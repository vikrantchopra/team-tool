import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadIssuedataComponent } from './read-issuedata.component';

describe('ReadIssuedataComponent', () => {
  let component: ReadIssuedataComponent;
  let fixture: ComponentFixture<ReadIssuedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadIssuedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadIssuedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
