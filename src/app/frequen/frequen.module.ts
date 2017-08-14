import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FrequenComponent } from './frequen.component'
import { FrequenDataService } from './frequen-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrequenComponent],
  providers: [FrequenDataService]
})
export class FrequenModule { }
