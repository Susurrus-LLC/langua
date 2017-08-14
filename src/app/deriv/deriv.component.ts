import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-deriv',
  templateUrl: './deriv.component.html',
  styleUrls: ['./deriv.component.css']
})
export class DerivComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Deriv')
  }
}
