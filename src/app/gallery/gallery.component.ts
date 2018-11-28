import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: GalleryImage[];
  name: string = "You want to delete this photo? " 
  constructor(
    private imageService :ImageService,
    private modal: NgbModal){ };

  ngOnInit() {
    this.imageService.getPhotos().subscribe(d=> this.images = d);
  }

  open(image: GalleryImage) {
    const modalRef = this.modal.open(ModalContentComponent);  
    modalRef.componentInstance.name = `Are you sure to want to delete image with title: ${image.title}`;

    modalRef.result
    .then(x=>{
    if(x===true){
    this.images = this.images.filter
    (p=>p.id != image.id)}});
    
  }
     
}
