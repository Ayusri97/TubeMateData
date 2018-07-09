import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VideoServiceService } from './video-service.service';
import { HttpModule } from '@angular/http';
import { ViewComponent } from './view/view.component';
import { SafePipe } from './safe.pipe';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';


const appRoutes: Routes = [
  { path: 'Add', component: AddComponent },
  { path: 'View', component: ViewComponent },
  { path: 'Update', component: UpdateComponent },
  { path: 'Edit', component: EditComponent },
  
  { path: '', redirectTo: '/Add', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddComponent,
    ViewComponent,
    SafePipe,
    UpdateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, HttpModule
  ],
  providers: [VideoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



