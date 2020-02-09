import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEventsComponent } from './modal-events.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalEventComponentModule } from './components/modal-event-component/modal-event-component.module';

@NgModule({
  declarations: [
    ModalEventsComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalEventComponentModule,
  ],
  exports: [
    ModalEventsComponent,
  ]
})
export class ModalEventsModule { }
