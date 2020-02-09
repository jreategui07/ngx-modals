import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalEventComponentComponent } from './components/modal-event-component/modal-event-component.component';

@Component({
  selector: 'app-modal-events',
  templateUrl: './modal-events.component.html',
  styleUrls: ['./modal-events.component.scss']
})
export class ModalEventsComponent {

  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  messages: string[] = [];

  constructor(
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
  ) {}

  openModal() {
    this.messages = [];

    this.subscriptions.push(
      this.modalService.onShow.subscribe((reason: string) => {
        this.messages.push(`onShow event has been fired`);
      })
    );

    this.subscriptions.push(
      this.modalService.onShown.subscribe((reason: string) => {
        this.messages.push(`onShown event has been fired`);
      })
    );

    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        const eventReason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHide event has been fired${eventReason}`);
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        const eventReason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHidden event has been fired${eventReason}`);
        this.unsubscribe();
      })
    );

    const combineEvents = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());
    this.subscriptions.push(combineEvents);

    this.modalRef = this.modalService.show(ModalEventComponentComponent);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

}
