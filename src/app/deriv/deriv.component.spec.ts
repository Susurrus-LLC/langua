import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivComponent } from './deriv.component';

describe('DerivComponent', () => {
  let component: DerivComponent;
  let fixture: ComponentFixture<DerivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
