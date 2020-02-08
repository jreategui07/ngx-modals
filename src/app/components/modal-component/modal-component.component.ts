import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Item 1',
        'Item 2',
        'Item 2',
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.textFromParent = 'This text was send by parent';
  }

  openModalMessage() {
    this.bsModalRef = this.modalService.show(ModalMessageComponent);
  }

}
