import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Title } from '@angular/platform-browser'

import { GenDataService } from './gen-data.service'
import { genData, GenData, variable, variables } from './gen.data'

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent {
  data: GenData
  variables: variable[]

  constructor(
    private titleService: Title,
    private genDataService: GenDataService
  ) {
    titleService.setTitle('Langua | Gen')
    this.data = genDataService.getData()
    this.variables = variables
  }

  // TODO: Remove this when finished
  get diagnostic(): string {
    return JSON.stringify(this.data)
  }
}
