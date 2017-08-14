import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GenComponent } from './gen.component'
import { GenDataService } from './gen-data.service'
import { HelpComponent } from './help/help.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GenComponent,
    HelpComponent
  ],
  providers: [GenDataService]
})
export class GenModule { }
