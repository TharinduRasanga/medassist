import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-med-specialized-client-care',
  templateUrl: './med-specialized-client-care.component.html',
  styleUrls: ['./med-specialized-client-care.component.scss']
})
export class MedSpecializedClientCareComponent implements OnInit {

  showModal = false;
  menuType: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  openModal(event) {
    this.menuType = event;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.menuType = '';
  }
}
