import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalScrollingComponent } from './modal-scrolling.component';

@NgModule({
  declarations: [
    ModalScrollingComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  exports: [
    ModalScrollingComponent
  ]
})
export class ModalScrollingModule {}
