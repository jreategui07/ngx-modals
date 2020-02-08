import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalMessageComponent } from './modal-message.component';

@NgModule({
  declarations: [
    ModalMessageComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
  ],
  entryComponents: [
    ModalMessageComponent
  ]
})
export class ModalMessageModule {}
