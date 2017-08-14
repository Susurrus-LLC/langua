import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenComponent } from './frequen.component';

describe('FrequenComponent', () => {
  let component: FrequenComponent;
  let fixture: ComponentFixture<FrequenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
