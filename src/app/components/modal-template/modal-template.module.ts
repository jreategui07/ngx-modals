import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalTemplateComponent } from './modal-template.component';

@NgModule({
  declarations: [
    ModalTemplateComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ModalTemplateComponent
  ]
})
export class ModalTemplateModule {}
