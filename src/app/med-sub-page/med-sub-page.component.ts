import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MedDataServiceService} from "./med-data-service.service";

@Component({
  selector: 'app-med-sub-page',
  templateUrl: './med-sub-page.component.html',
  styleUrls: ['./med-sub-page.component.scss']
})
export class MedSubPageComponent implements OnInit {

  @Input()
  menuItem: any = {
    title: '',
    body: '',
    html: ''
  };

  data: any;

  constructor(private translate: TranslateService, private dataService: MedDataServiceService) {
    // Set default language (can be dynamically updated based on user preference)
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.data = this.dataService.getData(this.menuItem);
  }

  // Getter for Object keys (mainMenu)
  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  // Change language (for example, on a button click)
  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
