import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalConfirmComponentComponent } from './components/modal-confirm-component/modal-confirm-component.component';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  modalRef: BsModalRef;
  message: boolean;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalConfirmComponentComponent, {
      class: 'modal-sm',
      keyboard: false,
      ignoreBackdropClick: true,
    });
    this.modalRef.content.onConfirmModal.subscribe((response: boolean) => {
      this.message = response;
    });
  }

}
