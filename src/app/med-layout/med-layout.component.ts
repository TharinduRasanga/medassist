import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-med-layout',
  templateUrl: './med-layout.component.html',
  styleUrls: ['./med-layout.component.scss']
})
export class MedLayoutComponent implements OnInit {
  changeMenu: any = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeMenuCallBack(event): void {
    this.changeMenu = null;
    setTimeout(() => {
      this.changeMenu = event;
    }, 20);
  }
}
