import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { DerivComponent } from './deriv/deriv.component'
import { FrequenComponent } from './frequen/frequen.component'
import { GenComponent } from './gen/gen.component'
import { MorphComponent } from './morph/morph.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'deriv',
    component: DerivComponent
  }, {
    path: 'frequen',
    component: FrequenComponent
  }, {
    path: 'gen',
    component: GenComponent
  }, {
    path: 'morph',
    component: MorphComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
