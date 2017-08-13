import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private getCopyrightDates(): string {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()

    if (y > initYear) {
      return `${initYear}–${y}`
    } else {
      return initYear.toString()
    }
  }

  author = 'Ian A. Cook'
  authorURL = 'https://github.com/nai888'
  copyYear = this.getCopyrightDates()
}
