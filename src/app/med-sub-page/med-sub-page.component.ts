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

  data2 : any = {
    heroSection: {
      title: "Expert-Led Healthcare Solutions with MedAssist Lanka",
      description: `At MedAssist Lanka, we provide comprehensive and internationally recognized medical assistance services, ensuring timely, professional, and expert-driven healthcare solutions for foreign travelers, expatriates, corporate clients, and local patients.<br><br>
    🩺 All medical assistance services are directly supervised by Dr. Mahendra Gunasekara, a Senior Cardiac Electrophysiologist and the Founder of MedAssist Lanka.`,
      imageSrc: "assets/images/hero-image.jpg"
    },
    items: [
      {
        title: "Medical Assistance Services",
        items: [
          {
            heading: "Doctor’s House Call & Hotel Visit",
            list: [
              "Urgent & Routine Medical Consultations – Doctors available 24/7",
              "Emergency & Backup Support: Ground Ambulance, 24/7 Air Evacuation",
              "Hospital Admission & Insurance Assistance",
              "Post-Consultation Follow-Up",
              "Multilingual Support – Russian, German, French, etc."
            ]
          },
          {
            heading: "Outpatient (OPD) Consultation Coordination",
            list: [
              "Specialist Consultations & Priority Booking",
              "Access to Key Specialties: Cardiology, Orthopedics, Pediatrics, etc."
            ]
          },
          {
            heading: "Hospital Admission & TPA Services",
            list: [
              "Effortless Admission Coordination & Specialist Referrals",
              "TPA Services – Insurance claims and health plan management",
              "Trusted Network of Leading Hospitals"
            ]
          },
          {
            heading: "Medical Cost Review & Fraud Investigation",
            list: [
              "Medical Cost Monitoring & Insurance Claim Verification",
              "Fraudulent Claim Investigation"
            ]
          },
          {
            heading: "Telemedicine & Virtual Care",
            list: [
              "General Telemedicine Consultations",
              "Specialist Virtual Appointments",
              "Prescription & Medication Guidance"
            ]
          },
          {
            heading: "Medical Evacuation & Repatriation",
            list: [
              "Ground & Air Ambulance Transfers",
              "International Medical Evacuation",
              "Mortal Remains Repatriation"
            ]
          },
          {
            heading: "Long-Term Care for Expats & Seniors",
            list: [
              "Home Nursing & Medical Assistance",
              "Regular Health Check-Ups",
              "Emergency Medical Support for Expats"
            ]
          },
          {
            heading: "Corporate & Occupational Health Services",
            list: [
              "On-Site Medical Services",
              "Occupational Health & Safety Programs",
              "Corporate Insurance Liaison"
            ]
          },
          {
            heading: "Specialist Case Management",
            list: [
              "Personalized Case Management",
              "Cross-Border Referrals & Second Opinions",
              "Insurance & Travel Liaison"
            ]
          },
          {
            heading: "International Repatriation Services",
            list: [
              "Legal, Documentation & Embassy Coordination",
              "Mortuary & Customs Clearance",
              "Supervised by Medical Professionals"
            ]
          },
          {
            heading: "Medical Escort Services",
            list: [
              "Air & Ground Medical Escorts",
              "International Medical Transfers",
              "Emergency & Non-Emergency Transfers",
              "Bed-to-Bed Care Coordination",
              "Portable Equipment & Oxygen Support",
              "Supervised by Dr. Mahendra Gunasekara"
            ]
          }
        ]
      }
    ]
  };

  data3 : any = {
    "heroSection": {
      "title": "Legal Assistance Services",
      "description": "Specialized Legal Solutions for Property, Business & Corporate Clients in Sri Lanka<br><br>At MedAssist Lanka, we provide expert legal assistance, with a special focus on property transactions, corporate law, financial legal services, and business establishment in Sri Lanka. Our legal team ensures comprehensive, transparent, and professionally managed legal support for foreign investors, expatriates, corporate clients, and entrepreneurs.<br><br>⚖️ Led by Ms. Upulie Mahagamage, Director of MedAssist Lanka Pvt Ltd, our legal division operates from two strategic locations:<br>📍 Main Office: Lawyers Office Complex, Matara New High Court Premises, Kotawila, Matara.<br>📍 Residential Law Office: No. 10, \"Senehasa,\" Matara Road, Telijjawila.<br><br>These locations provide direct access to Sri Lanka’s legal infrastructure, ensuring efficient legal support for property acquisitions, business setups, regulatory compliance, and corporate legal matters.",
      "imageSrc": "assets/images/img2.png"
    },
    "items": [
      {
        "title": "Legal Assistance Services",
        "items": [
          {
            "heading": "Property & Corporate Law",
            "list": [
              "Acquisition of Land & Property in Sri Lanka",
              "✔️ Legal verification of property ownership & title deeds.",
              "✔️ Due diligence for foreign investments in real estate.",
              "✔️ Preparation & notarization of sale agreements, leases, and mortgage documents.",
              "Business Establishment & Corporate Structuring",
              "✔️ Company registration for foreign & local investors.",
              "✔️ Drafting & reviewing shareholder agreements and business contracts.",
              "✔️ Regulatory compliance & licensing for new businesses.",
              "Corporate Governance & Compliance",
              "✔️ Advisory services for corporate mergers, acquisitions, and restructuring.",
              "✔️ Corporate tax law compliance & financial advisory support.",
              "✔️ Employment contracts & labor law compliance for businesses.",
              "Need expert legal advice on property acquisition or business setup? Contact Us Now!"
            ]
          },
          {
            "heading": "Corporate & Financial Legal Services",
            "list": [
              "Foreign Investment & Business Advisory",
              "✔️ Assistance with BOI (Board of Investment) approvals for foreign investors.",
              "✔️ Guidance on industry-specific licenses & tax structures.",
              "✔️ Commercial contract drafting & dispute resolution.",
              "Financial & Banking Legal Services",
              "✔️ Legal advisory on business loans, banking transactions, and corporate finance.",
              "✔️ Debt recovery & financial dispute resolution.",
              "✔️ Assistance in drafting and executing financial agreements.",
              "Regulatory & Tax Compliance",
              "✔️ Guidance on Sri Lanka’s corporate tax laws & financial regulations.",
              "✔️ Audit and legal compliance checks for businesses.",
              "✔️ Advisory services for international businesses expanding into Sri Lanka.",
              "Need corporate or financial legal assistance? Speak to Our Experts!"
            ]
          },
          {
            "heading": "Immigration & Business Relocation Services",
            "list": [
              "Business Visas & Residency Permits",
              "✔️ Legal processing for long-term visas & expatriate work permits.",
              "✔️ Assistance with business investor visa applications.",
              "✔️ Compliance with Sri Lanka’s immigration laws.",
              "Company Relocation & International Expansion",
              "✔️ Assistance with moving corporate entities to Sri Lanka.",
              "✔️ Business incorporation & tax structuring for relocated firms.",
              "✔️ Employment & labor law advisory for international businesses.",
              "Planning to relocate or invest in Sri Lanka? Let’s Get Started!"
            ]
          },
          {
            "heading": "Additional Legal Services",
            "list": [
              "Legal Representation & Dispute Resolution",
              "✔️ Court representation for corporate & property disputes.",
              "✔️ Alternative dispute resolution (arbitration & mediation).",
              "Personal & Family Law",
              "✔️ Marriage contracts, divorce settlements & child custody.",
              "✔️ Legal assistance in will drafting & inheritance matters.",
              "Personal Injury & Insurance Claims",
              "✔️ Legal support for accident claims & travel insurance disputes.",
              "✔️ Medical malpractice claims & patient rights advocacy.",
              "Need Professional Legal Support in Sri Lanka? Contact Us Today!"
            ]
          }
        ]
      }
    ]
  };

  data4 : any ={
    "heroSection": {
      "title": "Travel Assistance Services",
      "description": "Seamless & Reliable Support for International Travelers in Sri Lanka<br><br>At MedAssist Lanka, we provide comprehensive travel assistance services, ensuring a safe, smooth, and stress-free experience for foreign travelers, expatriates, and business professionals visiting Sri Lanka. Our services are backed by our strong networks in medical assistance, legal support, and corporate services, making us a one-stop solution for all travel-related concerns.<br><br>✨ Whether you require emergency support, visa assistance, logistical coordination, or travel insurance handling, MedAssist Lanka ensures that your journey is hassle-free and well-managed.<br><br><strong>Your Journey, Our Priority</strong><br>At MedAssist Lanka, we understand the importance of seamless travel, especially during medical emergencies. Our travel assistance services are designed to ensure your journey remains stress-free and safe, no matter the circumstances.",
      "imageSrc": "assets/images/travel-hero.jpg"
    },
    "items": [
      {
        "title": "Travel Assistance Services",
        "items": [
          {
            "heading": "Medical Evacuation & Repatriation Coordination",
            "list": [
              "Efficient planning and coordination for medical evacuations by air or ground transport.",
              "International repatriation support for travelers requiring continued medical treatment in their home country."
            ]
          },
          {
            "heading": "Assistance with Travel Insurance Claims",
            "list": [
              "Expert guidance & documentation to process claims for medical expenses.",
              "Liaison with insurance providers to ensure smooth and timely reimbursements."
            ]
          },
          {
            "heading": "Post-Illness Travel Arrangements",
            "list": [
              "Arranging travel plans after recovery, ensuring safety and compliance with health regulations.",
              "Issuance of fitness-to-fly certifications for patients requiring validation before air travel."
            ]
          },
          {
            "heading": "Emergency Travel Assistance",
            "list": [
              "Lost Passport & Travel Document Support – Assistance in obtaining emergency travel documents, liaising with embassies, and securing temporary passports.",
              "Medical Emergencies & Travel Insurance Coordination – Hospital admissions, evacuation planning, and insurance claim assistance for medical emergencies.",
              "Flight Rescheduling & Rebooking – Help with rebooking flights in case of emergencies, medical needs, or visa issues.",
              "Emergency Accommodation Arrangements – Immediate hotel bookings for stranded travelers or those requiring medical recovery stays.",
              "Facing an unexpected travel issue? Let us assist you 24/7!"
            ]
          },
          {
            "heading": "Visa & Immigration Assistance",
            "list": [
              "Medical Visa Extensions – Assistance for travelers requiring extended stays for medical treatment.",
              "Business & Work Visa Support – Guidance for corporate travelers, investors, and expatriates.",
              "Tourist Visa Extensions – Help with visa renewals to avoid overstays and legal complications.",
              "Legal Documentation & Compliance – Collaboration with immigration authorities for seamless processing.",
              "Need visa or immigration support? Contact our legal experts!"
            ]
          },
          {
            "heading": "Airport & Transportation Services",
            "list": [
              "VIP Airport Meet & Greet Services – Personal assistance for arrival, baggage handling, and fast-track immigration clearance.",
              "Private Chauffeur & Vehicle Hire – Well-maintained vehicles with professional drivers for airport transfers and intercity travel.",
              "Medical Transport Arrangements – Special ambulance and medical transport coordination for patients and seniors.",
              "Helicopter & Private Jet Charters – Exclusive air travel solutions for high-priority business and medical evacuations.",
              "Book your airport transfers or private travel now!"
            ]
          },
          {
            "heading": "Corporate & Business Travel Solutions",
            "list": [
              "Corporate Travel Arrangements – End-to-end travel planning for business delegations, conferences, and corporate meetings.",
              "Luxury Hotel & Serviced Apartment Reservations – Exclusive rates for high-end accommodations in Sri Lanka.",
              "Translation & Interpretation Services – Multilingual assistance for business travelers requiring real-time language support.",
              "Legal & Financial Assistance for Business Travelers – Guidance on foreign investments, business visas, and corporate legal matters.",
              "Need business travel coordination? Let us handle everything!"
            ]
          },
          {
            "heading": "Specialized Travel Support for Expatriates & Long-Term Visitors",
            "list": [
              "Healthcare Coordination for Expats – Access to Sri Lanka’s best hospitals, specialists, and long-term care facilities.",
              "Relocation Assistance – Support for moving, housing, and settling into Sri Lanka.",
              "Legal & Insurance Advisory – Expert guidance on expat rights, contracts, and healthcare coverage.",
              "Planning to stay longer in Sri Lanka? Get expert assistance now!"
            ]
          },
          {
            "heading": "Why Choose MedAssist Lanka for Travel Assistance?",
            "list": [
              "24/7 Emergency Support – Always available for urgent travel-related needs.",
              "Integrated Medical, Legal & Corporate Assistance – A complete travel support system for all requirements.",
              "Trusted Network of Partners – Collaborations with hotels, airlines, embassies, and local authorities.",
              "Seamless Coordination – Ensuring a smooth, worry-free travel experience in Sri Lanka.",
              "Need travel assistance in Sri Lanka? Contact Us Now!"
            ]
          }
        ]
      }
    ]
  };

  data5: any = {
    "heroSection": {
      "title": "Medical Tourism in Sri Lanka",
      "description": "Seamless Healthcare Backed by Our Strong Local Networks<br><br>Sri Lanka is becoming a leading destination for high-quality, affordable medical care, offering advanced healthcare with a relaxing recovery environment.<br><br>At MedAssist Lanka, we provide end-to-end medical tourism solutions, ensuring expert medical coordination, hassle-free travel, and post-treatment support. Our services are backed by our well-established local networks in medical, travel, and legal assistance, making the entire process smooth, efficient, and stress-free.<br><br>🩺 With exclusive access to Sri Lanka’s top hospitals, specialist doctors, and international-standard medical facilities, MedAssist Lanka guarantees world-class care at competitive prices.",
      "imageSrc": "assets/images/medical-tourism.jpg"
    },
    "items": [
      {
        "title": "Our Comprehensive Medical Tourism Services",
        "items": [
          {
            "heading": "Coordination of Specialized Medical Procedures",
            "list": [
              "Expert Care at Leading Private Hospitals – We arrange treatments with renowned specialists and accredited medical centers.",
              "Cardiac Care & Surgeries – Bypass surgery, valve repairs, and advanced heart procedures.",
              "Orthopedic Procedures – Joint replacements, spinal surgeries, and minimally invasive treatments.",
              "Cosmetic & Reconstructive Surgeries – Aesthetic enhancements, plastic surgery, and reconstructive procedures.",
              "Fertility & IVF Treatments – Assisted reproductive technology and gynecological procedures.",
              "Dental & Ophthalmic Care – Cosmetic dentistry, vision correction, and eye surgeries.",
              "Looking for world-class medical treatment in Sri Lanka? Let us arrange it for you!"
            ]
          },
          {
            "heading": "Complete Travel & Logistics Assistance",
            "list": [
              "From arrival to departure, we take care of all the details.",
              "Accommodation Arrangements – Recovery-friendly hotels, serviced apartments, or private hospital suites.",
              "Ground & Air Transportation – VIP airport pickups, private transfers, and medical transport as needed.",
              "Visa & Documentation Assistance – Medical visa processing and paperwork handling.",
              "Multilingual Support – Interpreters available in English, Russian, German, French, Chinese, Japanese, and more.",
              "Need assistance with travel logistics? Contact our team today!"
            ]
          },
          {
            "heading": "Post-Treatment Care & Follow-Up Coordination",
            "list": [
              "We ensure continuity of care even after your treatment is complete.",
              "Rehabilitation & Recovery Planning – Physical therapy, wellness programs, and dietary support.",
              "Virtual & In-Person Follow-Ups – Telemedicine consultations with specialists after returning home.",
              "Pharmacy & Medical Supplies Coordination – Assistance with prescriptions, medical equipment, and aftercare needs.",
              "Stay connected with your doctor—let us manage your post-treatment care!"
            ]
          },
          {
            "heading": "Legal & Financial Assistance for Medical Travelers",
            "list": [
              "Comprehensive legal support to ensure a hassle-free medical stay.",
              "Medical Visa Extensions – Assistance with visa extensions for ongoing treatment.",
              "Insurance Claim Processing – Support in medical expense reimbursement and legal documentation.",
              "Legal Protection for Foreign Patients – Ensuring patient rights and ethical medical practices.",
              "Need legal or financial support during your medical stay? Let our legal experts assist you!"
            ]
          },
          {
            "heading": "Why Choose MedAssist Lanka for Medical Tourism?",
            "list": [
              "✔️ Integrated Medical, Travel & Legal Support – Seamlessly coordinated for a smooth experience.",
              "✔️ Exclusive Access to Top Hospitals & Specialists – Partnered with leading private hospitals and accredited doctors.",
              "✔️ Complete End-to-End Coordination – From arrival to recovery, we manage everything.",
              "✔️ Affordable, World-Class Healthcare – High-quality treatments at cost-effective prices.",
              "✔️ Personalized Care & Assistance – Multilingual support, travel convenience, and a patient-first approach.",
              "Start Your Medical Journey with Us Today!"
            ]
          }
        ]
      }
    ]
  };

  data6: any = {
    "heroSection": {
      "title": "MedAssist Care Fund",
      "description": "Compassionate Support for Travelers in Critical Need<br><br>At MedAssist Lanka, we recognize that travelers may encounter unexpected financial and medical difficulties during their stay in Sri Lanka, despite having travel insurance. Many insurance plans come with coverage limitations, exclusions, and delays in claim approvals, leaving travelers vulnerable in critical moments.<br><br>With 12 years of expertise in the assistance services field, we established the MedAssist Care Fund as a dedicated financial safety net for carefully chosen clients who face extreme hardship. This fund ensures that no traveler is left without essential support when insurance fails to cover urgent medical, travel, or legal expenses.",
      "imageSrc": "assets/images/medassist-care-fund.jpg"
    },
    "items": [
      {
        "title": "Who We Assist",
        "items": [
          {
            "heading": "",
            "list": [
              "Insurance Limitations – When travel insurance does not fully cover necessary medical treatment, hospitalization, or transportation.",
              "Delayed or Rejected Claims – When travelers need urgent assistance but face long claim processing times or insurance denials.",
              "Emergency Medical Expenses – When unexpected medical issues require immediate intervention without available financial support.",
              "Repatriation & Urgent Travel Needs – When travelers need emergency transportation or repatriation that is not covered by their insurance plan.",
              "**Many clients who receive assistance from the fund voluntarily reimburse the resources after returning to their home countries, ensuring the sustainability of the program and helping future travelers in need.**"
            ]
          }
        ]
      },
      {
        "title": "How the MedAssist Care Fund Works",
        "items": [
          {
            "heading": "",
            "list": [
              "Case-by-Case Evaluation – Each request is carefully assessed by our expert team to determine eligibility based on urgency and necessity.",
              "Immediate Financial Assistance – We provide critical support for medical, travel, and legal emergencies when no other funding is available.",
              "Reimbursement-Based Model – Many travelers choose to repay the fund once they regain financial stability, ensuring continued support for future cases.",
              "Strict Confidentiality & Ethical Responsibility – Every case is handled with discretion and professionalism, prioritizing the dignity of the individuals we assist."
            ]
          }
        ]
      },
      {
        "title": "How You Can Help",
        "items": [
          {
            "heading": "1. Donate",
            "list": [
              "Your generosity directly supports travelers in need.",
              "Donate online through our secure payment gateway (Link to donation page)."
            ]
          },
          {
            "heading": "2. Tip Generously",
            "list": [
              "Add a tip when using any MedAssist service. All tips contribute directly to the fund."
            ]
          },
          {
            "heading": "3. Spread the Word",
            "list": [
              "Share the mission of the MedAssist Care Fund with friends, family, and your social networks. Help us reach those who may need support."
            ]
          }
        ]
      },
      {
        "title": "Transparency and Accountability",
        "items": [
          {
            "heading": "",
            "list": [
              "We are committed to full transparency. To ensure accountability and build trust, annual reports detailing fund usage will be published on our website."
            ]
          }
        ]
      },
      {
        "title": "Why Choose the MedAssist Care Fund?",
        "items": [
          {
            "heading": "",
            "list": [
              "A Proven Support System with 12+ Years of Experience – Trusted by travelers, embassies, and international assistance providers.",
              "Designed to Bridge Insurance Gaps – Providing essential financial support when insurance limitations leave travelers without options.",
              "Sustainable & Accountable – A self-sustaining model where past beneficiaries voluntarily reimburse funds, ensuring ongoing assistance for others.",
              "Comprehensive Assistance Beyond Funding – Integrated with our medical, travel, and legal support services to offer holistic solutions.",
              "Need Immediate Assistance? Contact Us Today!"
            ]
          }
        ]
      }
    ]
  };

  data7: any =  {
    "heroSection": {
      "title": "Diagnostic Services",
      "description": "Comprehensive & Expert-Guided Cardiac and Laboratory Diagnostics at MedAssist Lanka. We provide expert-led Holter and ECG interpretation, advanced imaging, functional cardiac testing, and hassle-free laboratory investigations.",
      "imageSrc": "assets/images/diagnostic-services.jpg"
    },
    "items": [
      {
        "title": "Holter Analysis Service",
        "items": [
          {
            "heading": "Expert-Led, Secure & Scalable Holter Data Interpretation",
            "list": [
              "Supervised by Expert Cardiac Electrophysiologists – Led by Dr. Mahendra Gunasekara with a team ensuring clinical accuracy.",
              "Dedicated Cardiac Technicians & Cardiographers – Accurate data processing and event detection.",
              "Secure & Compliant Data Handling – HIPAA & GDPR-compliant encryption for all data processes.",
              "Fast & Scalable Reporting – Structured workflows and high-volume support.",
              "Seamless Integration & Customizable Reports – Via cloud, API, or FTP/SFTP."
            ]
          },
          {
            "heading": "Capabilities",
            "list": [
              "Arrhythmia Classification & Event Detection",
              "ST-Segment Analysis for Ischemic Risk",
              "Heart Rate Variability (HRV) Assessment",
              "Atrial Fibrillation (AF) Burden Monitoring",
              "QT Interval & Sudden Cardiac Risk Stratification"
            ]
          }
        ]
      },
      {
        "title": "ECG Interpretation Service (Upcoming)",
        "items": [
          {
            "heading": "Expert-Led ECG Analysis for GPs & Primary Care",
            "list": [
              "Supervised by expert electrophysiologists – Led by Dr. Mahendra Gunasekara.",
              "Precise arrhythmia and conduction abnormality detection.",
              "Fast & reliable turnaround times.",
              "Secure, user-friendly online platform for ECG upload and report retrieval.",
              "HIPAA & GDPR-compliant data handling."
            ]
          },
          {
            "heading": "What We Offer",
            "list": [
              "12-Lead ECG Analysis",
              "ST-T Wave & Ischemic Pattern Assessment",
              "QT Interval Risk Stratification",
              "Real-Time Clinical Support for GPs",
              "Flexible Plans – Free or Subscription-Based Access"
            ]
          }
        ]
      },
      {
        "title": "Advanced Cardiac Diagnostic Solutions",
        "items": [
          {
            "heading": "Cardiac Imaging Services",
            "list": [
              "Cardiac CT Angiography (CTA)",
              "Coronary Calcium Scoring",
              "Cardiac MRI (CMR)",
              "Stress Cardiac MRI"
            ]
          },
          {
            "heading": "Risk Stratification & Functional Testing",
            "list": [
              "Ankle-Brachial Index (ABI) Testing",
              "Pulse Wave Velocity (PWV) Testing",
              "Cardiopulmonary Exercise Testing (CPET)",
              "Ambulatory Blood Pressure Monitoring (ABPM)",
              "Tilt Table Testing",
              "Exercise Stress Testing (TMT)"
            ]
          },
          {
            "heading": "Why Choose Us?",
            "list": [
              "One-Stop Access to Specialist Cardiac Diagnostics",
              "Expert-Led Recommendations & Report Validation",
              "Priority Scheduling & Timely Reports",
              "Access to Top Accredited Diagnostic Centers"
            ]
          }
        ]
      },
      {
        "title": "Laboratory Investigation Coordination",
        "items": [
          {
            "heading": "Effortless & Cashless Diagnostic Testing",
            "list": [
              "Cashless Testing for Seafarers & Insurance Clients",
              "Coordination for Routine & Advanced Blood Tests",
              "Access to Cardiac Biomarkers & Hormonal Panels",
              "Rapid Scheduling & Results",
              "Reports Reviewed by Specialists on Request"
            ]
          },
          {
            "heading": "Why Choose Us?",
            "list": [
              "No Upfront Payment for Eligible Patients",
              "Hassle-Free Coordination with Accredited Labs",
              "Fast, Secure, and Accurate Testing",
              "Optional Expert Interpretation for Clinical Clarity"
            ]
          }
        ]
      }
    ]
  };

  data8: any = {
    "heroSection": {
      "title": "Meet Our Founder",
      "description": "Dr. Mahendra Gunasekara MBBS (Ruhuna), MD Medicine (Colombo)<br>Specialist in Cardiac Electrophysiology | Founder & CEO of MedAssist Lanka Pvt Ltd<br><br>Dr. Mahendra Gunasekara is a renowned specialist in cardiac electrophysiology, currently serving at the Cardiology Unit of the National Hospital of Sri Lanka. With over 12 years of pioneering work in medical, travel, and legal assistance, he is the visionary behind MedAssist Lanka Pvt Ltd — Sri Lanka’s premier assistance service provider.",
      "imageSrc": "assets/images/founder.jpg"
    },
    "items": [
      {
        "title": "A Visionary in Healthcare Innovation",
        "items": [
          {
            "heading": "",
            "list": [
              "Innovator in Healthcare Solutions – Integrating technology for remote diagnostics and cardiac care.",
              "Leader in Assistance Services – Providing high-quality, timely, and accessible medical support.",
              "Trusted Healthcare Provider – Ensuring compassionate care during medical crises."
            ]
          }
        ]
      },
      {
        "title": "A Message from Dr. Gunasekara",
        "items": [
          {
            "heading": "",
            "list": [
              "\"At MedAssist Lanka, we are more than just a healthcare service; we are a lifeline for those in need. Whether it's a medical emergency, a travel-related health concern, or specialized diagnostics, we stand ready to provide expert, compassionate, and seamless care. Our mission is to ensure that no one feels vulnerable during a medical crisis, no matter where they are in Sri Lanka.\"",
              "Learn More About MedAssist Lanka"
            ]
          }
        ]
      },
      {
        "title": "MedAssist Sri Lanka at a Glance",
        "items": [
          {
            "heading": "",
            "list": [
              "12+ Years of Expertise in Medical, Travel & Legal Assistance",
              "Founded by Cardiac Electrophysiologist Dr. Mahendra Gunasekara",
              "Registered under Sri Lanka’s Companies Act, No. 07 of 2007",
              "24/7 Emergency Medical & Travel Assistance",
              "Advanced Cardiac Diagnostics – Holter Analysis, ECG Interpretation, Imaging Coordination",
              "Medical Tourism Coordination through our Travel Concierge Service",
              "Legal & Corporate Services Led by Director Upulie Mahagamage",
              "Services Include Immigration Support, Business Legal Advisory, and Foreign Investment Assistance",
              "MedAssist Care Fund – Financial Help for Travelers with Insurance Gaps",
              "Fully Compliant with HIPAA & GDPR for Secure Case Handling"
            ]
          }
        ]
      },
      {
        "title": "Contact Us",
        "items": [
          {
            "heading": "",
            "list": [
              "📞 Hotline: +94 XXXX XXXX",
              "📧 Email: info@medassist.lk"
            ]
          }
        ]
      }
    ]
  };

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
