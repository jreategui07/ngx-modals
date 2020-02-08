import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './modal-component.component';
import { ModalContentModule } from './components/modal-content/modal-content.module';
import { ModalMessageModule } from './components/modal-message/modal-message.module';

@NgModule({
  declarations: [
    ModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalContentModule,
    ModalMessageModule,
  ],
  exports: [
    ModalComponentComponent,
  ],
  entryComponents: [
  ]
})
export class ModalComponentModule {}
