import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MorphComponent } from './morph.component'
import { MorphDataService } from './morph-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MorphComponent],
  providers: [MorphDataService]
})
export class MorphModule { }
