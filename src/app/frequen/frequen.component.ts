import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-frequen',
  templateUrl: './frequen.component.html',
  styleUrls: ['./frequen.component.css']
})
export class FrequenComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Frequen')
  }
}
