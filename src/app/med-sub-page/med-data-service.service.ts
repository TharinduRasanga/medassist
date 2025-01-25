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
    LABORATORY_INVESTIGATION_ARRANGEMENT: {
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
    }


  };

  constructor() {
  }

  getData(event) {
    return this.body[event];
  }
}
