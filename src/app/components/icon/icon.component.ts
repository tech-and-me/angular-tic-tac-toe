import { Component, OnInit, Input } from '@angular/core';

import { faCircle,faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {



  @Input()
  iconName?:string;

  faCircle = faCircle;
  faTimes = faTimes;
  // faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
