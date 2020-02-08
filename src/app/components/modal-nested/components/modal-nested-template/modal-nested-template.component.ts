import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './modal-nested-template.component.html',
  styleUrls: ['./modal-nested-template.component.scss']
})
export class ModalNestedTemplateComponent {

  modalParentRef: BsModalRef;

  constructor(public bsModalRef: BsModalRef) { }

  closeModal() {
    this.bsModalRef.hide();
  }

  closeParentModal() {
    this.modalParentRef.hide();
    this.modalParentRef = null;
  }

}
