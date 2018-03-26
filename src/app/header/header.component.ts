import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { OtherLesson } from '../other-lessons/OtherLesson';
import { OtherLessons } from '../other-lessons/OtherLessons';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  otherLessons: OtherLesson[] = OtherLessons.OTHER_LESSONS;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes().subscribe(response => {
      console.log('Store Recipes Working');
      console.log(response);
    });
  }

}
