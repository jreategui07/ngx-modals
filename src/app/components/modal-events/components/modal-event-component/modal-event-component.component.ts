import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './modal-event-component.component.html',
  styleUrls: ['./modal-event-component.component.scss']
})
export class ModalEventComponentComponent {

  constructor(public bsModalRef: BsModalRef) { }

  closeModal() {
    this.bsModalRef.hide();
  }

}
