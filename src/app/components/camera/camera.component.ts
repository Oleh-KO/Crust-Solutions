import {Component, OnDestroy, OnInit} from '@angular/core';
import { CameraService } from '../../services/camera.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})

export class CameraComponent implements OnInit, OnDestroy {
  camerasArray = [];
  data;
  cameraData;
  subs = new Subscription();

  constructor(
    private cameraService: CameraService,
  ) {}

  ngOnInit(): void {
    const subscription = this.cameraService.getData(this.camerasArray).subscribe(response => {
      this.data = response;
      this.data[0].cameras.map(item => item.indicator = Math.random() >= 0.5);
      this.cameraData = this.data[0].cameras;
      this.shuffleArray(this.cameraData);
    });
    this.subs.add(subscription);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  shuffleArray(array): any {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
