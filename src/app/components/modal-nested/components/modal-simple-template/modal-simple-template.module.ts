import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalSimpleTemplateComponent } from './modal-simple-template.component';

@NgModule({
  declarations: [
    ModalSimpleTemplateComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalSimpleTemplateComponent
  ]
})
export class ModalSimpleTemplateModule { }
