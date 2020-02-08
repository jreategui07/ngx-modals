import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalSimpleTemplateComponent } from './components/modal-simple-template/modal-simple-template.component';

@Component({
  selector: 'app-modal-nested',
  templateUrl: './modal-nested.component.html',
  styleUrls: ['./modal-nested.component.scss']
})
export class ModalNestedComponent {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalSimpleTemplateComponent, { class: 'modal-sm' });
  }

}
