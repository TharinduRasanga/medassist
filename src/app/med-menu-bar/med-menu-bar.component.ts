import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

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
  @Output()
  changeMenu: EventEmitter<any> = new EventEmitter();

  menuItems3 = [
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
  ];
  menuItems2 = [
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
    },
    {
      "DISPLAY_NAME": "Global Travelers",
      "KEY": "GLOBAL_TRAVELERS",
      "MENU_ITEM": [
        {
          "key": "MEDICAL_ASSISTANCE",
          "value": "Medical Assistance"
        },
        {
          "key": "DOCTORS_HOUSE_CALL_VISIT",
          "value": "Doctor's House Call or Hotel Visit Service"
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
          "key": "LEGAL_ASSISTANCE",
          "value": "Legal Assistance"
        },
        {
          "key": "TRAVEL_ASSISTANCE",
          "value": "Travel Assistance"
        },
        {
          "key": "MEDICAL_TOURISM",
          "value": "Medical Tourism"
        },
        {
          "key": "MEDASSIST_CARE_FUND",
          "value": "MedAssist Care Fund"
        },
        {
          "key": "ABOUT_MEDASSIST",
          "value": "About MedAssist"
        }
      ]
    },
    {
      "DISPLAY_NAME": "Corporate Clients",
      "KEY": "CORPORATE_CLIENTS",
      "MENU_ITEM": [
        {
          "key": "MEDICAL_ASSISTANCE",
          "value": "Medical Assistance"
        },
        {
          "key": "DOCTORS_HOUSE_CALL_VISIT",
          "value": "Doctor's House Call or Hotel Visit Service"
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
          "key": "LEGAL_ASSISTANCE",
          "value": "Legal Assistance"
        },
        {
          "key": "TRAVEL_ASSISTANCE",
          "value": "Travel Assistance"
        },
        {
          "key": "MEDICAL_TOURISM",
          "value": "Medical Tourism"
        },
        {
          "key": "MEDASSIST_CARE_FUND",
          "value": "MedAssist Care Fund"
        },
        {
          "key": "ABOUT_MEDASSIST",
          "value": "About MedAssist"
        }
      ]
    },
    {
      "DISPLAY_NAME": "Corporate Clients",
      "KEY": "CORPORATE_CLIENTS",
      "MENU_ITEM": [
        {
          "key": "MEDICAL_ASSISTANCE",
          "value": "Medical Assistance"
        },
        {
          "key": "DOCTORS_HOUSE_CALL_VISIT",
          "value": "Doctor's House Call or Hotel Visit Service"
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
          "key": "LEGAL_ASSISTANCE",
          "value": "Legal Assistance"
        },
        {
          "key": "TRAVEL_ASSISTANCE",
          "value": "Travel Assistance"
        },
        {
          "key": "MEDICAL_TOURISM",
          "value": "Medical Tourism"
        },
        {
          "key": "MEDASSIST_CARE_FUND",
          "value": "MedAssist Care Fund"
        },
        {
          "key": "ABOUT_MEDASSIST",
          "value": "About MedAssist"
        }
      ]
    }
  ];
  menuItems = {'Maritime Professionals': [
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

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  changeMenuCallBack(event): void {
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
