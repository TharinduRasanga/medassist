import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-med-layout',
  templateUrl: './med-layout.component.html',
  styleUrls: ['./med-layout.component.scss']
})
export class MedLayoutComponent implements OnInit {
  changeMenu: any = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.changeMenu = null;
      setTimeout(() => {
        this.changeMenu = params['menu'];
      }, 20);
    });
  }

  changeMenuCallBack(event): void {
  /*  this.changeMenu = null;
    setTimeout(() => {
      this.changeMenu = event;
    }, 20);*/
  }
}
