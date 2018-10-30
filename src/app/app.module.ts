import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ActivComponent } from './activ/activ.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoeComponent } from './infoe/infoe.component';
import { EquipComponent } from './equip/equip.component';

const appRoutes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'activ',component: ActivComponent },
  { path: 'gallery',component: GalleryComponent },
  { path: 'infoe',component: InfoeComponent },
  { path: 'equip',component: EquipComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ActivComponent,
    GalleryComponent,
    InfoeComponent,
    EquipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
