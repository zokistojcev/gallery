import { Component} from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent  {

  constructor(private imageService: ImageService) { };
  imageUrl: string = "https://mbtskoudsalg.com/images/what-is-the-difference-between-jpg-and-png-files-1.png";
  fileToUpload: File = null;
  image: GalleryImage= {};
  title: string ;

  fileInput(file: File){
    this.fileToUpload = file;

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  titleInput(event){
      this.title = event.target.value;
      console.log(this.title);
  };

  uploadFileAndInput(){
    
      // const fd = new FormData();
      // fd.append('image', this.fileToUpload, this.title)
      this.image.title = this.title;
      this.image.url = this.imageUrl;
      this.imageService.postPhoto(this.image)
      .subscribe(res=>{console.log(res, "success")});

      this.imageUrl = "https://mbtskoudsalg.com/images/what-is-the-difference-between-jpg-and-png-files-1.png";
  
  }

}
