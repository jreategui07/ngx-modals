import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEventComponentComponent } from './modal-event-component.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ModalEventComponentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalEventComponentComponent
  ]
})
export class ModalEventComponentModule {}
