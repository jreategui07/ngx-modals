import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalScrollingComponentComponent } from './modal-scrolling-component.component';

@NgModule({
  declarations: [
    ModalScrollingComponentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ModalScrollingComponentComponent
  ]
})
export class ModalScrollingComponentModule { }
