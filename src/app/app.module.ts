import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cw1Component } from './cw1/cw1.component';
import { Cw2Component } from './cw2/cw2.component';
import { Cw3Component } from './cw3/cw3.component';
import { Cw4Component } from './cw4/cw4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { StudenciViewComponent } from './studenci-view/studenci-view.component';

@NgModule({
  declarations: [
    AppComponent,
    Cw1Component,
    Cw2Component,
    Cw3Component,
    Cw4Component,
    StudenciViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
