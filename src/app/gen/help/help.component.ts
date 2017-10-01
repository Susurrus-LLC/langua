import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-gen-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Gen Help')
  }
}
