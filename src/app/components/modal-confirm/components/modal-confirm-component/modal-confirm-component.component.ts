import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './modal-confirm-component.component.html',
  styleUrls: ['./modal-confirm-component.component.scss']
})
export class ModalConfirmComponentComponent {

  onConfirmModal = new Subject<boolean>();

  constructor(public bsModalRef: BsModalRef) {}

  confirmed(value: boolean): void {
    this.onConfirmModal.next(value);
    this.bsModalRef.hide();
  }

}
