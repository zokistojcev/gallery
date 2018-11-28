import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  @Input() name ;

  constructor(public activeModal: NgbActiveModal, private imageservice: ImageService  ) {}

  @Input() title: string ;
  @Input() id: number ;
  @Input() message: string ;
  @Input() btnOkText: string = "Ok";
  @Input() btnCancelText: string = "Cancel";

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.imageservice.deletePhoto(this.id)
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
