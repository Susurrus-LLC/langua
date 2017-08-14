import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Gen')
  }
}
