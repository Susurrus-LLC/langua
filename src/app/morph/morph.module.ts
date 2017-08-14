import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MorphComponent } from './morph.component'
import { MorphDataService } from './morph-data.service'
import { HelpComponent } from './help/help.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MorphComponent,
    HelpComponent
  ],
  providers: [MorphDataService]
})
export class MorphModule { }
