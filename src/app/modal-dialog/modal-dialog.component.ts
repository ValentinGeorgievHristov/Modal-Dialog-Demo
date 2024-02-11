import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
})
export class ModalDialogComponent implements OnInit {
  @Input() data: any;

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    // You can pass data back to the parent component here
    this.activeModal.close({ result: 'Closed with data', additionalData: 'Some additional data' });
  }

  ngOnInit(): void {
    console.log(this.data.name);
    console.log(this.data.message);
  }
}





