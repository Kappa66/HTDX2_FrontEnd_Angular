import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PG404Component } from './pg404.component';

describe('PG404Component', () => {
  let component: PG404Component;
  let fixture: ComponentFixture<PG404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PG404Component]
    });
    fixture = TestBed.createComponent(PG404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
