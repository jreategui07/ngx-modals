import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalScrollingComponentComponent } from './components/modal-scrolling-component/modal-scrolling-component.component';

@Component({
  selector: 'app-modal-scrolling',
  templateUrl: './modal-scrolling.component.html',
  styleUrls: ['./modal-scrolling.component.scss']
})
export class ModalScrollingComponent {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalScrollingComponentComponent);
  }

}
