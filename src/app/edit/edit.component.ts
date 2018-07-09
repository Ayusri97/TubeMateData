import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Video } from '../VideoClass';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  constructor(private q: VideoServiceService, private route: Router) { }

  ngOnInit() {
    this.q.GetVideoById();
  }
  _id = this.q.GetVideoById()._id;
  title = this.q.GetVideoById().title;
  path = this.q.GetVideoById().path;
  des = this.q.GetVideoById().des;

  Update = function (vd) {
    this.objVideo = {
      "title": vd.title,
      "_id": vd._id,
      "path": vd.path,
      "des": vd.des
    }
    this.q.UpdateVideo(this.objVideo).subscribe(
      success => {
        this.route.navigate(['/Update']);
      }
    );
  }

}
