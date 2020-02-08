import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// ngx - modals
import { ModalTemplateModule } from './components/modal-template/modal-template.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModalTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
