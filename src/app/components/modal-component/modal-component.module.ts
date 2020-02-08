import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './modal-component.component';
import { ModalContentModule } from './components/modal-content/modal-content.module';

@NgModule({
  declarations: [
    ModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalContentModule,
  ],
  exports: [
    ModalComponentComponent,
  ],
  entryComponents: [
  ]
})
export class ModalComponentModule {}
