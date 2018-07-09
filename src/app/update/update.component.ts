import { Component, OnInit } from '@angular/core';
import { Video } from '../VideoClass';
import { VideoServiceService } from '../video-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private objVideo: Video;

  constructor(private q: VideoServiceService, private route: Router) { }

  ngOnInit() {
    this.GetVideo();

  }
  GetVideo() {
    this.q.GetAllVideo().subscribe(
      data => {
        this.objVideo = data['msg'];
      }
    )
  }
  updateData(k) {
    this.q.FetchVideoById(k);
    this.route.navigate(['/Edit']);
  }

  deleteData(k) {
    this.q.DeleteVideo(k._id).subscribe(
      success => {
        this.GetVideo();
      }
    );
  }
  
}
