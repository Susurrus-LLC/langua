import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  siteTitle = 'Langua'
  siteSubtitle = 'A suite of language tools'
}
