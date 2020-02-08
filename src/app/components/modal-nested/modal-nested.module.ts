import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalNestedComponent } from './modal-nested.component';

@NgModule({
  declarations: [
    ModalNestedComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ModalNestedComponent,
  ],
  entryComponents: [
  ]
})
export class ModalNestedModule {}
