import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GenComponent } from './gen.component'
import { GenDataService } from './gen-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GenComponent],
  providers: [GenDataService]
})
export class GenModule { }
