import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DerivComponent } from './deriv.component'
import { DerivDataService } from './deriv-data.service'
import { HelpComponent } from './help/help.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DerivComponent,
    HelpComponent
  ],
  providers: [DerivDataService]
})
export class DerivModule { }
