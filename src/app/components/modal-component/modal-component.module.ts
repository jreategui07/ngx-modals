import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponentComponent, ModalContentComponent } from './modal-component.component';

@NgModule({
  declarations: [
    ModalComponentComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ModalComponentComponent,
  ],
  entryComponents: [
    ModalContentComponent
  ]
})
export class ModalComponentModule {}
