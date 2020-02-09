import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalConfirmComponentComponent } from './modal-confirm-component.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ModalConfirmComponentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalConfirmComponentComponent,
  ]
})
export class ModalConfirmComponentModule {}
