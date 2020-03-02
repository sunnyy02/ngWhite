import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcHomeComponent } from './abc-home.component';

describe('AbcHomeComponent', () => {
  let component: AbcHomeComponent;
  let fixture: ComponentFixture<AbcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
