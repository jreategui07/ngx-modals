import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './modal-component.component';

@NgModule({
  declarations: [
    ModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ModalComponentComponent
  ]
})
export class ModalComponentModule {}
