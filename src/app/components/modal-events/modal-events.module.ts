import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEventsComponent } from './modal-events.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ModalEventsComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ModalEventsComponent,
  ]
})
export class ModalEventsModule { }
