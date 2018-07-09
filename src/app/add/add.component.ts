import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Video } from '../VideoClass';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private objVideo: Video;
  constructor(private q: VideoServiceService) { }
  ngOnInit() {
  }
  AddNewVideo = function (vid) {
    this.objVideo = {
      "title": vid.title,
      "path": vid.path,
      "des": vid.des
    }
    this.q.createVideoData(this.objVideo).subscribe()
  }

}
