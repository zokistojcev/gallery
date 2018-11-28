import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { ImageService } from './services/image.service';

import { appRoutes } from '../app/routes';
import { HttpClientModule } from '@angular/common/http';
import { ModalContentComponent } from './modal-content/modal-content.component';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    UploadComponent,
    ModalContentComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()

  ],
  
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule {}
