import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-frequen',
  templateUrl: './frequen.component.html',
  styleUrls: ['./frequen.component.sass']
})
export class FrequenComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Frequen')
  }
}
