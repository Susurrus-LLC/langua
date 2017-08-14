import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    private titleService: Title
  ) {
    titleService.setTitle('Langua | Not Found')
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000)
  }
}
