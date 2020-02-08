import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalNestedTemplateComponent } from '../modal-nested-template/modal-nested-template.component';

@Component({
  templateUrl: './modal-simple-template.component.html',
  styleUrls: ['./modal-simple-template.component.scss']
})
export class ModalSimpleTemplateComponent {

  modalNestedRef: BsModalRef | null;

  constructor(public bsModalRef: BsModalRef,
              private modalService: BsModalService) { }

  closeModal() {
    this.bsModalRef.hide();
  }

  openNestedModal() {
    const config: ModalOptions = {
      class: 'second',
      initialState: {
        modalParentRef: this.bsModalRef
      }
    };
    this.modalNestedRef = this.modalService.show(ModalNestedTemplateComponent, config);
  }

}
