import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TreeComponent } from './tree.component'

describe('GenComponent', () => {
  let component: TreeComponent
  let fixture: ComponentFixture<TreeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
