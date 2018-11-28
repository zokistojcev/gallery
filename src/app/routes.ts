import { GalleryComponent } from "./gallery/gallery.component";
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from "./upload/upload.component";
import { ImageDetailComponent } from "./image-detail/image-detail.component";





export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'image/:id', component: ImageDetailComponent},
    {path: '', redirectTo: "../gallery", pathMatch: 'full'}
    // { path: '**', component: PageNotFoundComponent }

];
    
    
