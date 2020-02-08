import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalNestedTemplateComponent } from './modal-nested-template.component';

@NgModule({
  declarations: [
    ModalNestedTemplateComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalNestedTemplateComponent
  ]
})
export class ModalNestedTemplateModule { }
