import {Component, Input, OnInit} from '@angular/core';
import {MedDataServiceService} from "../med-sub-page/med-data-service.service";

@Component({
  selector: 'app-med-popup',
  templateUrl: './med-popup.component.html',
  styleUrls: ['./med-popup.component.scss']
})
export class MedPopupComponent implements OnInit {
  @Input() menuType: any = '';
  datas: any = [];

  constructor(private medDataServiceService: MedDataServiceService) {
  }

  ngOnInit(): void {
    if (this.menuType === 'Corporate') {
      this.datas.push(this.medDataServiceService.getData('MEDICAL_ASSISTANCE'));
      this.datas.push(this.medDataServiceService.getData('LEGAL_ASSISTANCE'));
      this.datas.push(this.medDataServiceService.getData('TRAVEL_ASSISTANCE'));
      this.datas.push(this.medDataServiceService.getData('DIAGNOSTIC_SERVICES'));
    } else if (this.menuType === 'Maritime') {
      this.datas.push(this.medDataServiceService.getData('MEDICAL_ASSISTANCE'));
    }
  }
}
