import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})

export class CameraComponent implements OnInit {
  camerasArray = [];
  data;
  cameraData;

  constructor(
    private cameraService: CameraService,
  ) {}

  ngOnInit(): void {
    this.cameraService.getData(this.camerasArray).subscribe(response => {
      this.data = response;
      this.data[0].cameras.map(item => item.indicator = Math.random() >= 0.5);
      this.shuffleArray(this.data);
      this.cameraData = this.data[0].cameras;
      console.log('RES', this.data);
    });
  }

  shuffleArray(a): any {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

}
