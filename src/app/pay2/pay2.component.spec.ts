import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2Component } from './pay2.component';

describe('Pay2Component', () => {
  let component: Pay2Component;
  let fixture: ComponentFixture<Pay2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pay2Component]
    });
    fixture = TestBed.createComponent(Pay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
