import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Langua | Tree')
  }
}
