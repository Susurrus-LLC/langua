import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AppRoutingModule } from './app-routing.module'
import { DerivModule } from './deriv/deriv.module'
import { FrequenModule } from './frequen/frequen.module'
import { GenModule } from './gen/gen.module'
import { MorphModule } from './morph/morph.module'
import { TreeModule } from './tree/tree.module'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DerivModule,
    FrequenModule,
    GenModule,
    MorphModule,
    TreeModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseUrl },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
