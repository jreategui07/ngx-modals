import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './modal-scrolling-component.component.html',
  styleUrls: ['./modal-scrolling-component.component.scss']
})
export class ModalScrollingComponentComponent implements OnInit {

  items: number[];

  constructor(public bsModalRef: BsModalRef) {
    this.items = Array(15).fill(0);
  }

  ngOnInit() {
  }

}
