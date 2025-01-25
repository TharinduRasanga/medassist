import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedDataServiceService {

  body: any = {
    DOCTORS_HOUSE_CALL_VISIT: {
      "heroSection": {
        "title": "Expert Care for Foreign Travelers in Sri Lanka",
        "description": "MedAssist – Sri Lanka provides personalized medical care designed specifically for foreign travelers, ensuring comfort, convenience, and professionalism throughout your stay in Sri Lanka.",
        "imageSrc": "../assets/img/hero.png"
      },
      "items": [
        {
          "title": "What We Offer",
          "items": [
            {
              "heading": "On-Demand Medical Visits",
              "list": [
                "Professional medical consultations at your hotel, residence, or preferred location.",
                "Ideal for addressing sudden illnesses, managing chronic conditions, or handling routine health concerns."
              ]
            },
            {
              "heading": "Comprehensive Backup Services",
              "list": [
                "Ground Ambulance Service: Immediate transportation for emergencies requiring hospital care.",
                "24-Hour Air Ambulance Pickup Service: Chartering a helicopter or plane for critical cases needing urgent evacuation or specialized treatment.",
                "Hospital Admission Coordination with TPA Services: Simplified hospital admissions and collaboration with insurance providers to manage billing and claims efficiently."
              ]
            },
            {
              "heading": "Post-Visit Telephone Advice",
              "list": [
                "Continued support with expert medical advice after your consultation."
              ]
            },
            {
              "heading": "Language Support",
              "list": [
                "Whenever necessary, our doctors are backed by qualified translators fluent in major international languages, including Russian, German, French, Chinese, and Japanese, to ensure seamless communication."
              ]
            }
          ]
        },
        {
          "title": "For Insured and Non-Insured Clients",
          "items": [
            {
              "heading": "• Free of Charge",
              "list": ["Services are complimentary for travelers with valid travel insurance policies applicable to our programs."]
            },
            {
              "heading": "• Additional Support for Others",
              "list": ["Detailed medical reports and MEDEX Cost Calculation provided for those without applicable insurance."]
            }
          ]
        },
        {
          "title": "Why Choose Our Service?",
          "items": [
            {
              "heading": "",
              "list": [
                "24/7 availability for reliable and prompt care.",
                "Comprehensive logistical support, including air and ground transport.",
                "Multilingual communication for an inclusive and stress-free experience.",
                "Trusted expertise ensuring health and peace of mind during your travels."
              ]
            }]
        }
      ]
    },
    OPD_CONSULTATIONS: {
      "heroSection": {
        "title": "OPD Consultations",
        "description": "Expert Care, Tailored to Your Schedule. MedAssist Lanka ensures you receive world-class outpatient care by connecting you with top specialists at leading hospitals across Sri Lanka."
      },
      "items": [
        {
          "title": "Our Services Include",
          "items": [
            {
              "heading": "Specialist Consultations",
              "list": [
                "We coordinate outpatient department (OPD) appointments with renowned specialists in diverse fields, ensuring expert care for your medical concerns."
              ]
            },
            {
              "heading": "Hassle-Free Scheduling",
              "list": [
                "Appointments arranged to suit your availability, minimizing waiting times and scheduling conflicts."
              ]
            },
            {
              "heading": "Focus on Key Specialties",
              "list": [
                "Access specialists across various medical fields, including:",
                "Cardiology: Heart and vascular health management.",
                "Orthopedics: Bone, joint, and muscle care.",
                "Pediatrics: Comprehensive care for children’s health.",
                "And more specialties tailored to your needs."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for OPD Consultations?",
          "items": [
            {
              "heading": "",
              "list": [
                "Access to Leading Hospitals: Collaborations with top-tier healthcare institutions for quality care.",
                "Personalized Coordination: We manage the entire process, allowing you to focus on your health.",
                "Timely Appointments: Convenient scheduling ensures your time is valued."
              ]
            }
          ]
        },
        {
          "title": "Your Health, Our Priority",
          "items": [
            {
              "heading": "",
              "list": [
                "Whether for routine check-ups or specialized medical advice, MedAssist Lanka is your trusted partner for outpatient care."
              ]
            }
          ]
        }
      ]
    },
    HOSPITAL_ADMISSION_COORDINATION: {
      "heroSection": {
        "title": "Hospital Admission Coordination / Third-Party Administration",
        "description": "Seamless Solutions for Your Hospital Admission Needs. MedAssist Lanka offers comprehensive support to ensure smooth and hassle-free hospital admissions, whether for planned procedures or emergencies."
      },
      "items": [
        {
          "title": "Our Services Include",
          "items": [
            {
              "heading": "Effortless Admission Coordination",
              "list": [
                "Direct facilitation of hospital admissions for all medical needs.",
                "Simplified processes through coordination with healthcare providers and insurers."
              ]
            },
            {
              "heading": "Specialized Referral Support",
              "list": [
                "Assistance with referrals and transfers for specialized treatments across leading healthcare facilities."
              ]
            },
            {
              "heading": "Third-Party Administration Expertise",
              "list": [
                "Collaboration with health insurers and self-insured companies to manage:",
                "Claims administration.",
                "Premium collection and enrollment processes.",
                "Outsourced responsibilities for healthcare providers establishing their own health plans."
              ]
            },
            {
              "heading": "Extensive Local Network",
              "list": [
                "MedAssist has built a robust network of reputed healthcare facilities across Sri Lanka.",
                "This allows us to arrange seamless admissions and care coordination with a single call."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Hospital Admission Coordination?",
          "items": [
            {
              "heading": "",
              "list": [
                "Streamlined Experience: We handle the complexities of administrative tasks, so you can focus on your health.",
                "Trusted Network: Access to Sri Lanka’s top hospitals and specialized providers.",
                "24/7 Availability: Support whenever you need it, ensuring timely interventions.",
                "Comprehensive Management: From admission to claims processing, we take care of every detail."
              ]
            }
          ]
        }
      ]
    },
    THIRD_PARTY_ADMINISTRATION: {}

  };

  constructor() {
  }

  getData(event) {
    return this.body[event];
  }
}
