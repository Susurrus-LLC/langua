import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DerivComponent } from './deriv.component'
import { DerivDataService } from './deriv-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DerivComponent],
  providers: [DerivDataService]
})
export class DerivModule { }
