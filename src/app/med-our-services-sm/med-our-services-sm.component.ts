import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'med-our-services-sm',
  templateUrl: './med-our-services-sm.component.html',
  styleUrls: ['./med-our-services-sm.component.scss']
})
export class MedOurServicesSmComponent implements OnInit {

  delay: string = "2.7s";

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoWidth: true,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    }
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
