import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalNestedComponent } from './modal-nested.component';
import { ModalNestedTemplateModule } from './components/modal-nested-template/modal-nested-template.module';
import { ModalSimpleTemplateModule } from './components/modal-simple-template/modal-simple-template.module';

@NgModule({
  declarations: [
    ModalNestedComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalNestedTemplateModule,
    ModalSimpleTemplateModule,
  ],
  exports: [
    ModalNestedComponent,
  ],
  entryComponents: [
  ]
})
export class ModalNestedModule {}
