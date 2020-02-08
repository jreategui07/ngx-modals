import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-scrolling',
  templateUrl: './modal-scrolling.component.html',
  styleUrls: ['./modal-scrolling.component.scss']
})
export class ModalScrollingComponent {

  modalRef: BsModalRef;
  items: any[];

  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
    console.log(this.items);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
