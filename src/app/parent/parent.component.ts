import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../modal-dialog/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {
  modalResult: any;
  private modalResultSubscription: Subscription;

  constructor(private modalService: ModalService) {
    this.modalResultSubscription = this.modalService.getModalResultObservable().subscribe((result) => {
      // Handle the result returned from the modal
      this.modalResult = result;
    });
  }

  data = {
    name: 'World',
    message: 'This is a dynamic message passed to the modal!'
  };

  openModal() {
    this.modalService.openModal(this.data);
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.modalResultSubscription.unsubscribe();
  }
}


