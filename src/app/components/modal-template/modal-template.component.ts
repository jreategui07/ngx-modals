import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent {

  @ViewChild('modalTemplate', {static: false}) template: TemplateRef<any>;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
 
  openModal() {
    this.modalRef = this.modalService.show(this.template);
  }

  closeModal() {
    this.modalRef.hide();
    this.reOpenMofal();
  }

  reOpenMofal() {
    setTimeout(() => {
      this.modalRef = this.modalService.show(this.template);
    }, 3000);
  }
  
}
