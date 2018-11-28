import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryImage } from '../models/galleryImage.model';
import { HttpClient } from '@angular/common/http';
import { Response} from "@angular/http";
import 'rxjs/add/operator/map';

const IMAGES: string = "http://jsonplaceholder.typicode.com/photos";

@Injectable()
export class ImageService {

  constructor(private http: HttpClient ){};
  
  getPhotos():Observable<any>{   
    return this.http.get(IMAGES).map((data: Response) => data);
  }

  getPhoto(id: string):Observable<GalleryImage>{
    const gUrl = IMAGES + "/"+id;
    return this.http.get<GalleryImage>(gUrl); 
  };

  updatePhoto(photo: GalleryImage):Observable<GalleryImage>{
    const gUrl = IMAGES + "/"+photo.id;
    return this.http.put<GalleryImage>(gUrl, photo);        
  };    
  deletePhoto(id: number):Observable<GalleryImage>{
    const gUrl = IMAGES + "/"+id;
    return this.http.delete<GalleryImage>(gUrl);        
  };
  postPhoto(photo: GalleryImage): Observable<GalleryImage>{
    return this.http.post<GalleryImage>(IMAGES, photo);
  } 

}