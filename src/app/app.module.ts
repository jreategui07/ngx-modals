import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// ngx - modals
import { ModalTemplateModule } from './components/modal-template/modal-template.module';
import { ModalComponentModule } from './components/modal-component/modal-component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModalTemplateModule,
    ModalComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
