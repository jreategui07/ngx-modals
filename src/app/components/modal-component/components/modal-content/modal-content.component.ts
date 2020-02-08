import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  // variables from initialState
  list: string[];
  title: string;

  // local variables, these variables can be accessed by this.bsModalRef.content in parent
  closeBtnName: string;
  textFromParent: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('Aditional item');
  }

}
