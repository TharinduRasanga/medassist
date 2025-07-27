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
        "imageSrc": "../assets/img/img1.png"
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
    LABORATORY_INVESTIGATION_ARRANGEMENT_: {
      "heroSection": {
        "title": "Laboratory Investigation Arrangement",
        "description": "Streamlined Access to Accurate Laboratory Diagnostics. MedAssist Lanka offers seamless coordination of laboratory investigations to ensure timely and precise results for healthcare providers and patients. Our partnerships with top-tier laboratories guarantee reliable diagnostics tailored to your specific health needs."
      },
      "items": [
        {
          "title": "Key Features",
          "items": [
            {
              "heading": "Comprehensive Coordination",
              "list": [
                "Facilitation of a wide range of laboratory tests, including:",
                "Routine blood work and biochemical panels.",
                "Specialized investigations such as hormonal assays, genetic testing, and immunology panels.",
                "Ensures all tests are scheduled efficiently to minimize delays."
              ]
            },
            {
              "heading": "Access to Top-Tier Laboratories",
              "list": [
                "Collaborations with leading diagnostic labs known for their accuracy and advanced technology.",
                "Assurance of high-quality results for routine and complex medical investigations."
              ]
            },
            {
              "heading": "Convenient and Streamlined Process",
              "list": [
                "Centralized scheduling to align with patient and provider timelines.",
                "Rapid turnaround times with simplified reporting for quick clinical decisions."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Laboratory Investigations?",
          "items": [
            {
              "heading": "",
              "list": [
                "Reliable Partnerships: Access to Sri Lanka’s most trusted and advanced laboratory facilities.",
                "Tailored Diagnostics: Services customized to meet specific clinical and research requirements.",
                "Efficient Workflow: Ensures a hassle-free experience for patients and healthcare providers."
              ]
            }
          ]
        },
        {
          "title": "Your Gateway to Accurate Laboratory Results",
          "items": [
            {
              "heading": "",
              "list": [
                "With MedAssist Lanka, healthcare professionals and patients benefit from seamless coordination, high-quality diagnostics, and prompt reporting, making your healthcare journey stress-free."
              ]
            }
          ]
        }
      ]
    },
    CARDIAC_CT_AND_MRI_ARRANGEMENT: {
    "heroSection": {
      "title": "Cardiac CT and MRI Arrangement",
      "description": "Facilitation of advanced cardiac imaging for precise diagnostics. Services include arranging cardiac CT for coronary artery assessment and MRI for structural or functional heart evaluations. Partnered with leading diagnostic centers for high-quality imaging."
    },
    "items": [
      {
        "title": "Key Features",
        "items": [
          {
            "heading": "Advanced Cardiac Imaging",
            "list": [
              "Facilitation of advanced cardiac imaging for precise diagnostics."
            ]
          },
          {
            "heading": "Cardiac CT and MRI Services",
            "list": [
              "Arranging cardiac CT for coronary artery assessment.",
              "MRI for structural or functional heart evaluations."
            ]
          },
          {
            "heading": "High-Quality Imaging",
            "list": [
              "Partnered with leading diagnostic centers for high-quality imaging."
            ]
          }
        ]
      }
    ]
  },
    MEDASSIST_CARE_FUND: {
    "heroSection": {
      "title": "MedAssist Care Fund",
      "description": "The MedAssist Care Fund is a compassionate initiative by MedAssist Lanka to support foreign travelers in Sri Lanka who face unexpected medical emergencies and financial hardships. Whether it’s due to an extended hospital stay, severe illness, or unforeseen expenses, the fund ensures no traveler feels abandoned during their time of need."
    },
    "items": [
      {
        "title": "Why We Established the Fund",
        "items": [
          {
            "heading": "",
            "list": [
              "To provide critical aid to those who exhaust their financial resources while recovering from illness or dealing with medical challenges.",
              "To reinforce our commitment to delivering not just medical assistance but also hope and care when it’s needed the most."
            ]
          }
        ]
      },
      {
        "title": "How It Works",
        "items": [
          {
            "heading": "",
            "list": [
              "The fund is sustained through:",
              "Contributions from MedAssist's profits.",
              "Tips received for our services.",
              "Donations from well-wishers and partners."
            ]
          }
        ]
      },
      {
        "title": "Success Stories",
        "items": [
          {
            "heading": "Case 1: A Helping Hand for a Recovering Tourist",
            "list": [
              "A tourist from Europe required an extended hospital stay following a serious illness, exhausting their travel budget. The MedAssist Care Fund covered essential living expenses and coordinated with their embassy to arrange their safe return home."
            ]
          },
          {
            "heading": "Case 2: Relief for a Stranded Seafarer",
            "list": [
              "A seafarer fell ill while at port in Sri Lanka, unable to resume work. The fund provided immediate medical assistance and accommodation during their recovery period."
            ]
          },
          {
            "heading": "Case 3: Emergency Support for a Family in Need",
            "list": [
              "A visiting family faced an unexpected medical emergency and struggled to manage escalating costs. The fund assisted with hospital bills and extended their accommodation until they could return safely to their country."
            ]
          }
        ]
      },
      {
        "title": "How You Can Help",
        "items": [
          {
            "heading": "",
            "list": [
              "Donate - Your generosity directly supports travelers in need. Donate online through our secure payment gateway (Link to donation page).",
              "Tip Generously - Add a tip when using any MedAssist service. All tips contribute to the fund.",
              "Spread the Word - Share the mission of the MedAssist Care Fund with friends, family, and your social networks."
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
              "We are committed to full transparency. Annual reports detailing fund usage will be published on our website to ensure accountability and build trust."
            ]
          }
        ]
      }
    ]
  },
    LEGAL_ASSISTANCE: {
      "heroSection": {
        "title": "Legal Assistance",
        "description": "Comprehensive Legal Support for All Your Needs. MedAssist Lanka offers a wide range of legal services, from representing clients in official institutions to court proceedings and property acquisitions. Our team of legal experts ensures professional advice and representation tailored to your specific needs."
      },
      "items": [
        {
          "title": "Our Key Services Include",
          "items": [
            {
              "heading": "Representation and Legal Advice",
              "list": [
                "Representing clients’ interests in official institutions.",
                "All aspects of court work, including prosecuting or defending claims.",
                "Alternative dispute resolution, including arbitration and mediation."
              ]
            },
            {
              "heading": "Immigration and Emigration Matters",
              "list": [
                "Visa extensions for medical reasons.",
                "Assistance with documentation for residency or travel."
              ]
            },
            {
              "heading": "Property and Commercial Law",
              "list": [
                "Examination and reporting on property titles.",
                "Preparation and attestation of leases, mortgages, transfers, and agreements.",
                "Assistance with tenancy, leasing, and property transactions.",
                "Guidance on commercial and corporate law matters."
              ]
            },
            {
              "heading": "Matrimonial and Family Law",
              "list": [
                "Matrimonial matters, including maintenance disputes.",
                "Adoption of minors and curatorship proceedings."
              ]
            },
            {
              "heading": "Personal Injury and Insurance",
              "list": [
                "Assistance with insurance claims and personal injury cases.",
                "Obtaining police reports and other required documentation."
              ]
            },
            {
              "heading": "Business and Financial Services",
              "list": [
                "Financial advice and debt resolution.",
                "Business management advice and support."
              ]
            },
            {
              "heading": "Other Specialized Legal Areas",
              "list": [
                "Labour law, including unfair dismissals and unfair labor practices.",
                "Liquor license applications.",
                "Administration of deceased estates."
              ]
            }
          ]
        },
        {
          "title": "Free Legal Advice Service",
          "items": [
            {
              "heading": "",
              "list": [
                "Submit your legal queries via email, fax, or post for a free initial assessment.",
                "We provide a clear quote for chargeable services and only proceed with your explicit instructions."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Legal Assistance?",
          "items": [
            {
              "heading": "",
              "list": [
                "Broad Expertise: Our team covers a wide spectrum of legal areas to address all your needs.",
                "Personalized Service: Tailored solutions for expatriates, tourists, and locals alike.",
                "Transparent Process: Free initial assessments with clear pricing for chargeable services."
              ]
            }
          ]
        },
        {
          "title": "Your Trusted Legal Partner in Sri Lanka",
          "items": [
            {
              "heading": "",
              "list": [
                "No matter the complexity of your legal issues, MedAssist Lanka ensures reliable support and expert solutions."
              ]
            }
          ]
        }
      ]
    },
    TRAVEL_ASSISTANCE: {
      "heroSection": {
        "title": "Travel Assistance",
        "description": "Your Journey, Our Priority. At MedAssist Lanka, we understand the importance of seamless travel, especially during medical emergencies. Our travel assistance services are designed to ensure your journey remains stress-free and safe, no matter the circumstances."
      },
      "items": [
        {
          "title": "Our Key Services Include",
          "items": [
            {
              "heading": "Medical Evacuation and Repatriation Coordination",
              "list": [
                "Efficient planning and coordination for medical evacuations, whether by air or ground transport.",
                "Support with international repatriation to your home country for continued treatment."
              ]
            },
            {
              "heading": "Assistance with Travel Insurance Claims",
              "list": [
                "Expert guidance and documentation to process claims for medical expenses.",
                "Liaison with insurance providers to ensure smooth and timely reimbursements."
              ]
            },
            {
              "heading": "Post-Illness Travel Arrangements",
              "list": [
                "Arranging travel plans after recovery, ensuring safety and compliance with health regulations.",
                "Issuance of fitness-to-fly certifications for patients requiring validation before air travel."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Travel Assistance?",
          "items": [
            {
              "heading": "",
              "list": [
                "Comprehensive Coordination: From insurance claims to repatriation, we handle every detail with precision.",
                "Expert Support: Backed by a team experienced in travel-related medical assistance.",
                "Global Reach: Access to international networks for seamless service delivery."
              ]
            }
          ]
        },
        {
          "title": "Travel with Confidence",
          "items": [
            {
              "heading": "",
              "list": [
                "Whether you're recovering from an illness or navigating unexpected medical needs, MedAssist Lanka ensures you get the care and support required for a safe and smooth journey."
              ]
            }
          ]
        }
      ]
    },
    MEDICAL_TOURISM: {
      "heroSection": {
        "title": "Medical Tourism",
        "description": "Discover High-Quality Healthcare in Sri Lanka. Sri Lanka is fast becoming a preferred destination for affordable, world-class medical care. With MedAssist Lanka, experience the perfect blend of advanced healthcare and cultural exploration. Supported by our robust private healthcare network and comprehensive travel assistance services, we offer seamless inbound medical tourism solutions."
      },
      "items": [
        {
          "title": "Our Services Include",
          "items": [
            {
              "heading": "Coordination of Specialized Medical Procedures",
              "list": [
                "Access to leading experts for treatments such as:",
                "Cardiac Surgeries: Advanced interventions for heart-related conditions.",
                "Orthopedic Procedures: Joint replacements, spinal surgeries, and more.",
                "Cosmetic Surgeries: State-of-the-art aesthetic treatments."
              ]
            },
            {
              "heading": "Comprehensive Travel and Logistic Support",
              "list": [
                "Assistance with accommodations tailored to recovery needs.",
                "Ground and air transportation arrangements for medical visits.",
                "Multilingual interpreter services for a stress-free experience."
              ]
            },
            {
              "heading": "Post-Treatment Care and Follow-Up Coordination",
              "list": [
                "Continued support through rehabilitation planning and aftercare.",
                "Coordination of follow-up consultations, either locally or virtually."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Medical Tourism?",
          "items": [
            {
              "heading": "",
              "list": [
                "Expertise in Healthcare Coordination: Access to Sri Lanka’s top private hospitals and specialists.",
                "Seamless Travel Assistance: End-to-end support, from arrival to departure.",
                "Affordable Excellence: High-quality medical care at competitive prices."
              ]
            }
          ]
        },
        {
          "title": "Your Health, Our Commitment",
          "items": [
            {
              "heading": "",
              "list": [
                "With MedAssist Lanka, you can focus on your recovery while we take care of every detail, making your medical journey stress-free and rewarding."
              ]
            }
          ]
        }
      ]
    },
    HOLTER_ANALYSIS_ONLINE: {
      "heroSection": {
        "title": "Holter Analysis Service",
        "description": "<b>'Your Trusted Partner in Cardiac Data Interpretation.'</b> </br> </br> " +
          " At MedAssist Lanka Pvt Ltd, we specialize in high-quality Holter monitoring data analysis for global healthcare companies. With a team led by senior cardiac electrophysiologists and experienced cardiac technicians, we ensure clinically accurate, efficient, and reliable interpretations of Holter recordings. Our cost-effective and scalable services allow healthcare providers and monitoring companies to focus on patient care while optimizing operational efficiency."
      },
      "items": [
        {
          "title": "Seamless and Cost-Effective Holter Monitoring Interpretation",
          "items": [
            {
              "heading": "Expert-Led Interpretation",
              "list": [
                "All Holter reports are analyzed by a team of highly skilled cardiac electrophysiologists, ensuring precision in arrhythmia diagnosis, event detection, and device management."
              ]
            },
            {
              "heading": "Efficient Turnaround Time",
              "list": [
                "Our structured workflow ensures rapid analysis and reporting, enabling real-time decision-making for healthcare providers."
              ]
            },
            {
              "heading": "Scalable & Secure Processing",
              "list": [
                "We utilize HIPAA-compliant and GDPR-compliant secure cloud-based solutions, ensuring confidential data processing with seamless integration into your existing systems."
              ]
            },
            {
              "heading": "Cost-Effective Outsourcing Model",
              "list": [
                "By leveraging our expert team in Sri Lanka, we offer high-quality Holter analysis at a fraction of the cost, helping companies optimize resources without compromising accuracy."
              ]
            },
            {
              "heading": "Customizable Reporting",
              "list": [
                "Reports can be tailored to your specific requirements, with flexible formats and advanced analytics, including:",
                "Arrhythmia Detection",
                "ST-Segment Analysis",
                "Heart Rate Variability (HRV) Assessment",
                "Atrial Fibrillation (AF) Burden Monitoring",
                "Customized Summary Reports for Physicians & Researchers"
              ]
            }
          ]
        },
        {
          "title": "Why Partner with MedAssist Lanka for Holter Data Analysis?",
          "items": [
            {
              "heading": "",
              "list": [
                "Highly trained electrophysiology specialists",
                "Fast and efficient turnaround times",
                "Customizable reporting formats based on client needs",
                "Scalable solutions for growing business demands",
                "HIPAA & GDPR-compliant secure data processing",
                "Significant cost savings with high-quality interpretations",
                "Our team has years of experience in analyzing Holter data for healthcare providers worldwide, ensuring precision and clinical excellence."
              ]
            }
          ]
        },
        {
          "title": "Let’s Discuss a Partnership",
          "items": [
            {
              "heading": "",
              "list": [
                "We are actively seeking collaborations with Holter monitoring companies, research institutions, and healthcare providers who want to:",
                "Enhance efficiency & scalability in their Holter data analysis workflows",
                "Reduce operational costs while maintaining high accuracy",
                "Ensure rapid, reliable, and expert-led interpretations"
              ]
            }
          ]
        }
      ]
    },
    ECG_INTERPRETATION_ONLINE: {
      "heroSection": {
        "title": "ECG Interpretation Service (Upcoming Service)",
        "description": "<b>Expert-Led ECG Analysis for General Practitioners & Primary Care Providers.</b> </br> </br> At MedAssist Lanka, we are introducing a specialized online ECG interpretation service designed to assist General Practitioners (GPs) and primary care providers in making accurate and timely clinical decisions. This service will provide in-practice ECG support through expert analysis by subspecialist cardiac electrophysiologists."
      },
      "items": [
        {
          "title": "What We Offer",
          "items": [
            {
              "heading": "Specialist-Led ECG Interpretation",
              "list": [
                "Every ECG is reviewed and interpreted by highly trained cardiac electrophysiologists, ensuring precise arrhythmia diagnosis, conduction abnormalities, and ischemic changes detection."
              ]
            },
            {
              "heading": "Real-Time Clinical Support",
              "list": [
                "GPs can upload ECGs online for rapid analysis, allowing for quicker patient management and decision-making."
              ]
            },
            {
              "heading": "Customized Reporting & Insights",
              "list": [
                "Each ECG report will include:",
                "Standard 12-Lead ECG Analysis",
                "Arrhythmia and Conduction Abnormality Detection",
                "ST-T Wave Changes & Ischemic Pattern Assessment",
                "QT Interval and Risk Stratification for Sudden Cardiac Events"
              ]
            },
            {
              "heading": "Secure & User-Friendly Platform",
              "list": [
                "Our online system will provide a secure, HIPAA-compliant, and easy-to-use interface for seamless ECG submission and report retrieval."
              ]
            },
            {
              "heading": "Flexible Service Plans",
              "list": [
                "Free Account – Limited ECG submissions per month.",
                "Subscription-Based Plan – Higher ECG submission limits for frequent users."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist Lanka for ECG Interpretation?",
          "items": [
            {
              "heading": "",
              "list": [
                "Specialist-Driven ECG Analysis – Ensure clinically validated, expert-reviewed reports.",
                "Fast & Reliable Turnaround Times – Reduce delays in critical decision-making.",
                "Convenience for GPs & Clinics – Seamless online submission & secure reporting.",
                "Improved Patient Outcomes – Accurate ECG interpretation supports better risk assessment & treatment planning."
              ]
            }
          ]
        },
        {
          "title": "Coming Soon – Stay Tuned!",
          "items": [
            {
              "heading": "",
              "list": [
                "We are working on launching this service soon to enhance clinical decision-making for GPs. If you are interested in early access or partnership opportunities, contact us today!"
              ]
            }
          ]
        }
      ]
    },
    CARDIAC_CT_MRI_ARRANGEMENT: {
      "heroSection": {
        "title": "Cardiac CT & MRI Coordination",
        "description": "<b>Expert Facilitation for Advanced Cardiac Imaging.</b></br></br>At MedAssist Lanka, we act as a trusted facilitator for arranging Cardiac CT and Cardiac MRI scans at leading diagnostic imaging centers. Our service ensures seamless scheduling, high-quality imaging, and expert interpretations, making the process efficient and stress-free for patients."
      },
      "items": [
        {
          "title": "What We Arrange",
          "items": [
            {
              "heading": "Cardiac CT Angiography (CTA)",
              "list": [
                "Non-invasive imaging of the coronary arteries to assess blockages or anomalies."
              ]
            },
            {
              "heading": "Coronary Calcium Scoring",
              "list": [
                "Evaluating heart disease risk by measuring calcium deposits in coronary arteries."
              ]
            },
            {
              "heading": "Cardiac MRI (CMR)",
              "list": [
                "High-resolution imaging for detailed heart structure and function assessment."
              ]
            },
            {
              "heading": "Stress Cardiac MRI",
              "list": [
                "Evaluating myocardial perfusion under stress conditions."
              ]
            }
          ]
        },
        {
          "title": "Why Choose Our Facilitation Service?",
          "items": [
            {
              "heading": "",
              "list": [
                "Priority Scheduling – Avoid long wait times with fast-tracked appointments.",
                "Access to Leading Imaging Centers – We connect patients with high-quality, internationally accredited facilities.",
                "Specialist-Guided Imaging Recommendations – Our team ensures patients are directed to the most appropriate test based on their clinical needs.",
                "Comprehensive & Accurate Reporting – All imaging reports are provided by expert radiologists & cardiologists, ensuring precise diagnostic insights."
              ]
            }
          ]
        },
        {
          "title": "Book Your Cardiac Imaging Appointment with Ease",
          "items": [
            {
              "heading": "",
              "list": [
                "Contact Us Today!"
              ]
            }
          ]
        }
      ]
    },
    LABORATORY_INVESTIGATION_ARRANGEMENT: {
      "heroSection": {
        "title": "Laboratory Investigation Coordination",
        "description": "<b>Effortless Access to Reliable & High-Quality Diagnostic Testing.</b> </br></br> At MedAssist Lanka, we streamline laboratory investigation arrangements, ensuring accurate, timely, and hassle-free testing by coordinating with top-tier, internationally accredited diagnostic centers. Our service is designed to provide healthcare providers and patients with seamless access to trusted laboratory diagnostics for comprehensive health assessments."
      },
      "items": [
        {
          "title": "Our Services",
          "items": [
            {
              "heading": "Comprehensive Test Panel Coordination",
              "list": [
                "Routine Blood Tests – CBC, lipid profile, liver & kidney function tests.",
                "Advanced Cardiac Biomarkers – Troponin, NT-proBNP, hs-CRP, and other cardiac risk markers.",
                "Coagulation Studies & Metabolic Panels – Essential for evaluating clotting disorders and metabolic health.",
                "Endocrine & Hormonal Assessments – Thyroid function, diabetes screening, and adrenal health evaluations."
              ]
            },
            {
              "heading": "Priority Testing & Rapid Turnaround",
              "list": [
                "We secure priority appointments to minimize wait times and ensure fast-tracked results, essential for timely medical decision-making."
              ]
            },
            {
              "heading": "Accredited & Trusted Laboratory Network",
              "list": [
                "We collaborate with renowned and certified laboratories to ensure high-precision testing that meets international standards for accuracy and reliability."
              ]
            },
            {
              "heading": "Specialist-Guided Report Interpretation",
              "list": [
                "Upon request, our team of experts can review and interpret test results, providing clinical insights and recommendations, especially for complex cardiac biomarkers and risk assessments."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist Lanka?",
          "items": [
            {
              "heading": "",
              "list": [
                "Convenient & Hassle-Free Coordination – We manage the entire process from test scheduling to report delivery.",
                "Access to High-Quality Diagnostics – We work with top-tier laboratories for precise and clinically validated results.",
                "Faster Testing & Results Delivery – Our priority service ensures quick turnaround times for critical diagnostics.",
                "Expert-Backed Interpretations – Optional specialist-reviewed reports for enhanced clinical decision-making."
              ]
            }
          ]
        }
      ]
    }
  };

  bodyV2: any = {
    MEDICAL_ASSISTANCE:  {
      heroSection: {
        title: "Expert-Led Healthcare Solutions with MedAssist Lanka",
        description: `At MedAssist Lanka, we provide comprehensive and internationally recognized medical assistance services, ensuring timely, professional, and expert-driven healthcare solutions for foreign travelers, expatriates, corporate clients, and local patients.<br><br>
    🩺 All medical assistance services are directly supervised by Dr. Mahendra Gunasekara, a Senior Cardiac Electrophysiologist and the Founder of MedAssist Lanka.`,
        imageSrc: "../assets/img/img1.png"
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
    },
   /* OPD_CONSULTATIONS: {
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
    LABORATORY_INVESTIGATION_ARRANGEMENT_: {
      "heroSection": {
        "title": "Laboratory Investigation Arrangement",
        "description": "Streamlined Access to Accurate Laboratory Diagnostics. MedAssist Lanka offers seamless coordination of laboratory investigations to ensure timely and precise results for healthcare providers and patients. Our partnerships with top-tier laboratories guarantee reliable diagnostics tailored to your specific health needs."
      },
      "items": [
        {
          "title": "Key Features",
          "items": [
            {
              "heading": "Comprehensive Coordination",
              "list": [
                "Facilitation of a wide range of laboratory tests, including:",
                "Routine blood work and biochemical panels.",
                "Specialized investigations such as hormonal assays, genetic testing, and immunology panels.",
                "Ensures all tests are scheduled efficiently to minimize delays."
              ]
            },
            {
              "heading": "Access to Top-Tier Laboratories",
              "list": [
                "Collaborations with leading diagnostic labs known for their accuracy and advanced technology.",
                "Assurance of high-quality results for routine and complex medical investigations."
              ]
            },
            {
              "heading": "Convenient and Streamlined Process",
              "list": [
                "Centralized scheduling to align with patient and provider timelines.",
                "Rapid turnaround times with simplified reporting for quick clinical decisions."
              ]
            }
          ]
        },
        {
          "title": "Why Choose MedAssist for Laboratory Investigations?",
          "items": [
            {
              "heading": "",
              "list": [
                "Reliable Partnerships: Access to Sri Lanka’s most trusted and advanced laboratory facilities.",
                "Tailored Diagnostics: Services customized to meet specific clinical and research requirements.",
                "Efficient Workflow: Ensures a hassle-free experience for patients and healthcare providers."
              ]
            }
          ]
        },
        {
          "title": "Your Gateway to Accurate Laboratory Results",
          "items": [
            {
              "heading": "",
              "list": [
                "With MedAssist Lanka, healthcare professionals and patients benefit from seamless coordination, high-quality diagnostics, and prompt reporting, making your healthcare journey stress-free."
              ]
            }
          ]
        }
      ]
    },
    CARDIAC_CT_AND_MRI_ARRANGEMENT: {
      "heroSection": {
        "title": "Cardiac CT and MRI Arrangement",
        "description": "Facilitation of advanced cardiac imaging for precise diagnostics. Services include arranging cardiac CT for coronary artery assessment and MRI for structural or functional heart evaluations. Partnered with leading diagnostic centers for high-quality imaging."
      },
      "items": [
        {
          "title": "Key Features",
          "items": [
            {
              "heading": "Advanced Cardiac Imaging",
              "list": [
                "Facilitation of advanced cardiac imaging for precise diagnostics."
              ]
            },
            {
              "heading": "Cardiac CT and MRI Services",
              "list": [
                "Arranging cardiac CT for coronary artery assessment.",
                "MRI for structural or functional heart evaluations."
              ]
            },
            {
              "heading": "High-Quality Imaging",
              "list": [
                "Partnered with leading diagnostic centers for high-quality imaging."
              ]
            }
          ]
        }
      ]
    },
    MEDASSIST_CARE_FUND: {
      "heroSection": {
        "title": "MedAssist Care Fund",
        "description": "The MedAssist Care Fund is a compassionate initiative by MedAssist Lanka to support foreign travelers in Sri Lanka who face unexpected medical emergencies and financial hardships. Whether it’s due to an extended hospital stay, severe illness, or unforeseen expenses, the fund ensures no traveler feels abandoned during their time of need."
      },
      "items": [
        {
          "title": "Why We Established the Fund",
          "items": [
            {
              "heading": "",
              "list": [
                "To provide critical aid to those who exhaust their financial resources while recovering from illness or dealing with medical challenges.",
                "To reinforce our commitment to delivering not just medical assistance but also hope and care when it’s needed the most."
              ]
            }
          ]
        },
        {
          "title": "How It Works",
          "items": [
            {
              "heading": "",
              "list": [
                "The fund is sustained through:",
                "Contributions from MedAssist's profits.",
                "Tips received for our services.",
                "Donations from well-wishers and partners."
              ]
            }
          ]
        },
        {
          "title": "Success Stories",
          "items": [
            {
              "heading": "Case 1: A Helping Hand for a Recovering Tourist",
              "list": [
                "A tourist from Europe required an extended hospital stay following a serious illness, exhausting their travel budget. The MedAssist Care Fund covered essential living expenses and coordinated with their embassy to arrange their safe return home."
              ]
            },
            {
              "heading": "Case 2: Relief for a Stranded Seafarer",
              "list": [
                "A seafarer fell ill while at port in Sri Lanka, unable to resume work. The fund provided immediate medical assistance and accommodation during their recovery period."
              ]
            },
            {
              "heading": "Case 3: Emergency Support for a Family in Need",
              "list": [
                "A visiting family faced an unexpected medical emergency and struggled to manage escalating costs. The fund assisted with hospital bills and extended their accommodation until they could return safely to their country."
              ]
            }
          ]
        },
        {
          "title": "How You Can Help",
          "items": [
            {
              "heading": "",
              "list": [
                "Donate - Your generosity directly supports travelers in need. Donate online through our secure payment gateway (Link to donation page).",
                "Tip Generously - Add a tip when using any MedAssist service. All tips contribute to the fund.",
                "Spread the Word - Share the mission of the MedAssist Care Fund with friends, family, and your social networks."
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
                "We are committed to full transparency. Annual reports detailing fund usage will be published on our website to ensure accountability and build trust."
              ]
            }
          ]
        }
      ]
    },*/
    LEGAL_ASSISTANCE: {
      "heroSection": {
        "title": "Legal Assistance Services",
        "description": "Specialized Legal Solutions for Property, Business & Corporate Clients in Sri Lanka<br><br>At MedAssist Lanka, we provide expert legal assistance, with a special focus on property transactions, corporate law, financial legal services, and business establishment in Sri Lanka. Our legal team ensures comprehensive, transparent, and professionally managed legal support for foreign investors, expatriates, corporate clients, and entrepreneurs.<br><br>⚖️ Led by Ms. Upulie Mahagamage, Director of MedAssist Lanka Pvt Ltd, our legal division operates from two strategic locations:<br>📍 Main Office: Lawyers Office Complex, Matara New High Court Premises, Kotawila, Matara.<br>📍 Residential Law Office: No. 10, \"Senehasa,\" Matara Road, Telijjawila.<br><br>These locations provide direct access to Sri Lanka’s legal infrastructure, ensuring efficient legal support for property acquisitions, business setups, regulatory compliance, and corporate legal matters.",
        "imageSrc": "../assets/img/img3.png"
      },
      "items": [
        {
          "title": "Legal Assistance Services",
          "items": [
            {
              "heading": "Property & Corporate Law",
              "list": [
                "Acquisition of Land & Property in Sri Lanka",
                "Legal verification of property ownership & title deeds.",
                "Due diligence for foreign investments in real estate.",
                "Preparation & notarization of sale agreements, leases, and mortgage documents.",
                "Business Establishment & Corporate Structuring",
                "Company registration for foreign & local investors.",
                "Drafting & reviewing shareholder agreements and business contracts.",
                "Regulatory compliance & licensing for new businesses.",
                "Corporate Governance & Compliance",
                "Advisory services for corporate mergers, acquisitions, and restructuring.",
                "Corporate tax law compliance & financial advisory support.",
                "Employment contracts & labor law compliance for businesses.",
                "Need expert legal advice on property acquisition or business setup? Contact Us Now!"
              ]
            },
            {
              "heading": "Corporate & Financial Legal Services",
              "list": [
                "Foreign Investment & Business Advisory",
                "Assistance with BOI (Board of Investment) approvals for foreign investors.",
                "Guidance on industry-specific licenses & tax structures.",
                "Commercial contract drafting & dispute resolution.",
                "Financial & Banking Legal Services",
                "Legal advisory on business loans, banking transactions, and corporate finance.",
                "Debt recovery & financial dispute resolution.",
                "Assistance in drafting and executing financial agreements.",
                "Regulatory & Tax Compliance",
                "Guidance on Sri Lanka’s corporate tax laws & financial regulations.",
                "Audit and legal compliance checks for businesses.",
                "Advisory services for international businesses expanding into Sri Lanka.",
                "Need corporate or financial legal assistance? Speak to Our Experts!"
              ]
            },
            {
              "heading": "Immigration & Business Relocation Services",
              "list": [
                "Business Visas & Residency Permits",
                "Legal processing for long-term visas & expatriate work permits.",
                "Assistance with business investor visa applications.",
                "Compliance with Sri Lanka’s immigration laws.",
                "Company Relocation & International Expansion",
                "Assistance with moving corporate entities to Sri Lanka.",
                "Business incorporation & tax structuring for relocated firms.",
                "Employment & labor law advisory for international businesses.",
                "Planning to relocate or invest in Sri Lanka? Let’s Get Started!"
              ]
            },
            {
              "heading": "Additional Legal Services",
              "list": [
                "Legal Representation & Dispute Resolution",
                "Court representation for corporate & property disputes.",
                "Alternative dispute resolution (arbitration & mediation).",
                "Personal & Family Law",
                "Marriage contracts, divorce settlements & child custody.",
                "Legal assistance in will drafting & inheritance matters.",
                "Personal Injury & Insurance Claims",
                "Legal support for accident claims & travel insurance disputes.",
                "Medical malpractice claims & patient rights advocacy.",
                "Need Professional Legal Support in Sri Lanka? Contact Us Today!"
              ]
            }
          ]
        }
      ]
    },
    TRAVEL_ASSISTANCE: {
      "heroSection": {
        "title": "Travel Assistance Services",
        "description": "Seamless & Reliable Support for International Travelers in Sri Lanka<br><br>At MedAssist Lanka, we provide comprehensive travel assistance services, ensuring a safe, smooth, and stress-free experience for foreign travelers, expatriates, and business professionals visiting Sri Lanka. Our services are backed by our strong networks in medical assistance, legal support, and corporate services, making us a one-stop solution for all travel-related concerns.<br><br>✨ Whether you require emergency support, visa assistance, logistical coordination, or travel insurance handling, MedAssist Lanka ensures that your journey is hassle-free and well-managed.<br><br><strong>Your Journey, Our Priority</strong><br>At MedAssist Lanka, we understand the importance of seamless travel, especially during medical emergencies. Our travel assistance services are designed to ensure your journey remains stress-free and safe, no matter the circumstances.",
        "imageSrc": "../assets/img/img2.png"
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
    },
    MEDICAL_TOURISM: {
      "heroSection": {
        "title": "Medical Tourism in Sri Lanka",
        "description": "Seamless Healthcare Backed by Our Strong Local Networks<br><br>Sri Lanka is becoming a leading destination for high-quality, affordable medical care, offering advanced healthcare with a relaxing recovery environment.<br><br>At MedAssist Lanka, we provide end-to-end medical tourism solutions, ensuring expert medical coordination, hassle-free travel, and post-treatment support. Our services are backed by our well-established local networks in medical, travel, and legal assistance, making the entire process smooth, efficient, and stress-free.<br><br>🩺 With exclusive access to Sri Lanka’s top hospitals, specialist doctors, and international-standard medical facilities, MedAssist Lanka guarantees world-class care at competitive prices.",
        "imageSrc": "../assets/img/img5.png"
      },
      "items": [
        {
          "title": "Our Comprehensive Medical Tourism Services",
          "items": [
            {
              "heading": "Coordination of Specialized Medical Procedures",
              "list": [
                "item.heading | trimExpert Care at Leading Private Hospitals – We arrange treatments with renowned specialists and accredited medical centers.",
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
                "item.heading | trimFrom arrival to departure, we take care of all the details.",
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
                "item.heading | trimWe ensure continuity of care even after your treatment is complete.",
                "Rehabilitation & Recovery Planning – Physical therapy, wellness programs, and dietary support.",
                "Virtual & In-Person Follow-Ups – Telemedicine consultations with specialists after returning home.",
                "Pharmacy & Medical Supplies Coordination – Assistance with prescriptions, medical equipment, and aftercare needs.",
                "Stay connected with your doctor—let us manage your post-treatment care!"
              ]
            },
            {
              "heading": "Legal & Financial Assistance for Medical Travelers",
              "list": [
                "item.heading | trimComprehensive legal support to ensure a hassle-free medical stay.",
                "Medical Visa Extensions – Assistance with visa extensions for ongoing treatment.",
                "Insurance Claim Processing – Support in medical expense reimbursement and legal documentation.",
                "Legal Protection for Foreign Patients – Ensuring patient rights and ethical medical practices.",
                "Need legal or financial support during your medical stay? Let our legal experts assist you!"
              ]
            },
            {
              "heading": "Why Choose MedAssist Lanka for Medical Tourism?",
              "list": [
                "Integrated Medical, Travel & Legal Support – Seamlessly coordinated for a smooth experience.",
                "Exclusive Access to Top Hospitals & Specialists – Partnered with leading private hospitals and accredited doctors.",
                "Complete End-to-End Coordination – From arrival to recovery, we manage everything.",
                "Affordable, World-Class Healthcare – High-quality treatments at cost-effective prices.",
                "Personalized Care & Assistance – Multilingual support, travel convenience, and a patient-first approach.",
                "Start Your Medical Journey with Us Today!"
              ]
            }
          ]
        }
      ]
    },
    MEDASSIST_CARE_FUND: {
      "heroSection": {
        "title": "MedAssist Care Fund",
        "description": "Compassionate Support for Travelers in Critical Need<br><br>At MedAssist Lanka, we recognize that travelers may encounter unexpected financial and medical difficulties during their stay in Sri Lanka, despite having travel insurance. Many insurance plans come with coverage limitations, exclusions, and delays in claim approvals, leaving travelers vulnerable in critical moments.<br><br>With 12 years of expertise in the assistance services field, we established the MedAssist Care Fund as a dedicated financial safety net for carefully chosen clients who face extreme hardship. This fund ensures that no traveler is left without essential support when insurance fails to cover urgent medical, travel, or legal expenses.",
        "imageSrc": "../assets/img/fund.png"
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
                "Many clients who receive assistance from the fund voluntarily reimburse the resources after returning to their home countries, ensuring the sustainability of the program and helping future travelers in need."
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
                "item.heading | trimCase-by-Case Evaluation – Each request is carefully assessed by our expert team to determine eligibility based on urgency and necessity.",
                "item.heading | trimImmediate Financial Assistance – We provide critical support for medical, travel, and legal emergencies when no other funding is available.",
                "item.heading | trimReimbursement-Based Model – Many travelers choose to repay the fund once they regain financial stability, ensuring continued support for future cases.",
                "item.heading | trimStrict Confidentiality & Ethical Responsibility – Every case is handled with discretion and professionalism, prioritizing the dignity of the individuals we assist."
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
    },
    DIAGNOSTIC_SERVICES: {
      "heroSection": {
        "title": "Diagnostic Services",
        "description": "Comprehensive & Expert-Guided Cardiac and Laboratory Diagnostics at MedAssist Lanka. We provide expert-led Holter and ECG interpretation, advanced imaging, functional cardiac testing, and hassle-free laboratory investigations.",
        "imageSrc": "../assets/img/img4.png"
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
    }
  };

  constructor() {
  }

  getData(event) {
    return this.bodyV2[event];
  }
}
