import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'med-menu-bar',
  templateUrl: './med-menu-bar.component.html',
  styleUrls: ['./med-menu-bar.component.scss']
})
export class MedMenuBarComponent implements OnInit {
  enableSwitch: boolean = true;
  switchMenu: string = 'Corporate Clients';
  menuSelectItems: any = [
    'Corporate Clients',
    'Maritime Professionals',
    'Global Travelers'
  ];
  selectedMenuKey: string | null = null;
  @Output()
  changeMenu: EventEmitter<any> = new EventEmitter();

  menuItems = {
    'Maritime Professionals': [
      {
        "DISPLAY_NAME": "OPD Consultations",
        "KEY": "OPD_CONSULTATIONS"
      },
      {
        "DISPLAY_NAME": "Hospital Admission Coordination",
        "KEY": "HOSPITAL_ADMISSION_COORDINATION"
      },
      {
        "DISPLAY_NAME": "Laboratory Investigation Arrangement",
        "KEY": "LABORATORY_INVESTIGATION_ARRANGEMENT"
      },
      {
        "DISPLAY_NAME": "Cardiac CT and MRI Arrangement",
        "KEY": "CARDIAC_CT_AND_MRI_ARRANGEMENT"
      },
      {
        "DISPLAY_NAME": "MedAssist Care Fund",
        "KEY": "MEDASSIST_CARE_FUND"
      }
    ],
    'Corporate Clients': [
      {
        "DISPLAY_NAME": "Medical Assistance",
        "KEY": "MEDICAL_ASSISTANCE"
      },{
        "DISPLAY_NAME": "Legal Assistance",
        "KEY": "LEGAL_ASSISTANCE"
      },{
        "DISPLAY_NAME": "Travel Assistance",
        "KEY": "TRAVEL_ASSISTANCE"
      },{
        "DISPLAY_NAME": "Diagnostic Services",
        "KEY": "DIAGNOSTIC_SERVICES"
      },
    /*  {
        "DISPLAY_NAME": "Assistance Services",
        "KEY": "ASSISTANCE_SERVICES",
        "MENU_ITEM": [
          {
            "key": "MEDICAL_ASSISTANCE",
            "value": "Medical Assistance",
            /!*"SUB_MENU": [
              {
                "key": "DOCTORS_HOUSE_CALL_VISIT",
                "value": "Doctor's House Call Visit"
              },
              {
                "key": "OPD_CONSULTATIONS",
                "value": "OPD Consultations"
              },
              {
                "key": "HOSPITAL_ADMISSION_COORDINATION",
                "value": "Hospital Admission Coordination / Third-Party Administration"
              },
              {
                "key": "MEDICAL_COST_MONITORING_INVESTIGATION",
                "value": "Medical cost monitoring and investigation of frauded medical claim bills"
              }
            ]*!/
          },
          {
            "key": "LEGAL_ASSISTANCE",
            "value": "Legal Assistance"
          },
          {
            "value": "Travel Assistance",
            "key": "TRAVEL_ASSISTANCE"
          }
        ]
      },*/
      /*{
        "DISPLAY_NAME": "Diagnostic Services",
        "KEY": "DIAGNOSTIC_SERVICES"/!*,
        "MENU_ITEM": [

          {
            "key": "HOLTER_ANALYSIS_ONLINE",
            "value": "Holter Analysis"
          },
          {
            "key": "ECG_INTERPRETATION_ONLINE",
            "value": "ECG Interpretation"
          },
          {
            "key": "CARDIAC_CT_MRI_ARRANGEMENT",
            "value": "Cardiac CT & MRI"
          },
          {
            "key": "LABORATORY_INVESTIGATION_ARRANGEMENT",
            "value": "Lab Investigations"
          }
        ]*!/
      },*/
      {
        "DISPLAY_NAME": "Medical Tourism",
        "KEY": "MEDICAL_TOURISM"
      },
      {
        "DISPLAY_NAME": "MedAssist Care Fund",
        "KEY": "MEDASSIST_CARE_FUND"
      }
    ],
    'Global Travelers': [
      {
        "DISPLAY_NAME": "Medical Assistance",
        "KEY": 'MEDICAL_ASSISTANCE',
        "MENU_ITEM": [
          {
            "key": "DOCTORS_HOUSE_CALL_VISIT",
            "value": "Doctor's House Call Visit"
          },
          {
            "key": "OPD_CONSULTATIONS",
            "value": "OPD Consultations"
          },
          {
            "key": "HOSPITAL_ADMISSION_COORDINATION",
            "value": "Hospital Admission Coordination / Third-Party Administration"
          }
        ]
      },
      {
        "DISPLAY_NAME": "Legal Assistance",
        "KEY": "LEGAL_ASSISTANCE"
      },
      {
        "DISPLAY_NAME": "Travel Assistance",
        "KEY": "TRAVEL_ASSISTANCE"
      },
      {
        "DISPLAY_NAME": "Medical Tourism",
        "KEY": "MEDICAL_TOURISM"
      },
      {
        "DISPLAY_NAME": "MedAssist Care Fund",
        "KEY": "MEDASSIST_CARE_FUND"
      }
    ]
  };

  constructor(private translate: TranslateService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  changeMenuCallBack(event): void {
    this.selectedMenuKey = event;
    this.router.navigate([], {
      queryParams: { menu: event}
    });
    this.changeMenu.emit(event);
  }

  getMenuName(menu, menuName, category, key): string {

    let keyName: string = '';
    if (menu && menu !== '') {
      keyName = menu;
    }
    if (menuName && menuName !== '') {
      keyName = keyName + '.' + menuName;
    }
    if (category && category !== '') {
      keyName = keyName + '.' + category;
    }
    if (key && key !== '') {
      keyName = keyName + '.' + key;
    }
    return this.translate.instant(keyName);
  }
}
