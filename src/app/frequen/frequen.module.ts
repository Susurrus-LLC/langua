import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FrequenComponent } from './frequen.component'
import { FrequenDataService } from './frequen-data.service'
import { HelpComponent } from './help/help.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrequenComponent,
    HelpComponent
  ],
  providers: [FrequenDataService]
})
export class FrequenModule { }
