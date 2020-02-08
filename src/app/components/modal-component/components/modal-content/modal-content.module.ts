import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './modal-content.component';

@NgModule({
  declarations: [
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
  ],
  entryComponents: [
    ModalContentComponent
  ]
})
export class ModalContentModule {}
