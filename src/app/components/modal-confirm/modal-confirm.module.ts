import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalConfirmComponent } from './modal-confirm.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  exports: [
    ModalConfirmComponent,
  ]
})
export class ModalConfirmModule { }
