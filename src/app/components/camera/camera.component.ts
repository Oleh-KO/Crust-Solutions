import { Component, OnInit } from '@angular/core';
import {CameraService} from '../../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  camerasArray = [];
  cameraData;

  constructor(
    private cameraService: CameraService,
  ) {}

  ngOnInit(): void {
    this.cameraService.getData(this.camerasArray).subscribe(response => {
      this.cameraData = response;
      this.cameraData.map(item => item.indicator = Math.random() >= 0.5);
      this.shuffleArray(this.cameraData);
    });
  }

  // tslint:disable-next-line:typedef
  shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


}
