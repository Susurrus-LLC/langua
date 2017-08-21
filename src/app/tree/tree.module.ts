import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TreeComponent } from './tree.component'
import { TreeDataService } from './tree-data.service'
import { HelpComponent } from './help/help.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TreeComponent,
    HelpComponent
  ],
  providers: [TreeDataService]
})
export class TreeModule { }
