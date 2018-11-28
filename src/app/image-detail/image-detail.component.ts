import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/galleryImage.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
   show: boolean = true;
   image: GalleryImage = {};
   title: string;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
  ){};

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }

  getImageUrl(id: string){
    this.imageService.getPhoto(id).subscribe(d=> this.image = d);
  }

  saveImageTitle(){
    this.image.title = this.title;
    this.imageService.updatePhoto(this.image).subscribe(x=>this.image=x);
  };

}


