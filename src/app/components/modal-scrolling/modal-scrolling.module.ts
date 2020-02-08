import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalScrollingComponent } from './modal-scrolling.component';
import { ModalScrollingComponentModule } from './components/modal-scrolling-component/modal-scrolling-component.module';

@NgModule({
  declarations: [
    ModalScrollingComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ModalScrollingComponentModule,
  ],
  exports: [
    ModalScrollingComponent
  ]
})
export class ModalScrollingModule {}
