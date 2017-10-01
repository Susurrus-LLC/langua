import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-morph',
  templateUrl: './morph.component.html',
  styleUrls: ['./morph.component.sass']
})
export class MorphComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Morph')
  }
}
