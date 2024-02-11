import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ModalDialogComponent } from './modal-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalResultSubject = new Subject<any>();

  constructor(private modalService: NgbModal) { }

  openModal(data: any) {
    const modalRef = this.modalService.open(ModalDialogComponent);
    modalRef.componentInstance.data = data;

    modalRef.result.then(
      (result) => this.modalResultSubject.next(result),
      (reason) => this.modalResultSubject.next({ dismissed: true, reason })
    );
  }

  getModalResultObservable() {
    return this.modalResultSubject.asObservable();
  }
}
