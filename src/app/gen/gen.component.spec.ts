import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenComponent } from './gen.component';

describe('GenComponent', () => {
  let component: GenComponent;
  let fixture: ComponentFixture<GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
