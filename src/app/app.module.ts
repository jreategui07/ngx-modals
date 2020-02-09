import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// ngx - modals
import { ModalTemplateModule } from './components/modal-template/modal-template.module';
import { ModalComponentModule } from './components/modal-component/modal-component.module';
import { ModalNestedModule } from './components/modal-nested/modal-nested.module';
import { ModalScrollingModule } from './components/modal-scrolling/modal-scrolling.module';
import { ModalEventsModule } from './components/modal-events/modal-events.module';
import { ModalConfirmModule } from './components/modal-confirm/modal-confirm.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModalTemplateModule,
    ModalComponentModule,
    ModalNestedModule,
    ModalScrollingModule,
    ModalEventsModule,
    ModalConfirmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
