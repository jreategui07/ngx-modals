import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalConfirmComponent } from './modal-confirm.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalConfirmComponentModule } from './components/modal-confirm-component/modal-confirm-component.module';

@NgModule({
  declarations: [
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalConfirmComponentModule,
  ],
  exports: [
    ModalConfirmComponent,
  ]
})
export class ModalConfirmModule { }
