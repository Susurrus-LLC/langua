import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { GenDataService } from './gen-data.service'

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent {
  private data: object

  constructor(
    private titleService: Title,
    private genDataService: GenDataService
  ) {
    titleService.setTitle('Langua | Gen')
    this.data = genDataService.getData()
  }
}
