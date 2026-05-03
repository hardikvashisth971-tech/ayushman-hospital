// Extended department detail data — conditions, technologies, FAQs per department

export interface DepartmentDetail {
  id: number;
  detailedDescription: string;
  conditionsTreated: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const DEPARTMENT_DETAILS: DepartmentDetail[] = [
  {
    id: 1,
    detailedDescription:
      "Our Dental department offers comprehensive oral healthcare using the latest digital dentistry technologies. From routine cleanings and fillings to complex implant surgeries and full-mouth rehabilitations, our expert team ensures a painless, comfortable experience. We emphasize preventive dentistry to help patients maintain optimal oral health and a confident smile throughout their lives.",
    conditionsTreated: [
      "Tooth decay & cavities",
      "Gum disease (Periodontitis)",
      "Cracked or broken teeth",
      "Tooth sensitivity",
      "Misaligned teeth & malocclusion",
      "Oral ulcers & lesions",
      "Impacted wisdom teeth",
      "Tooth loss & edentulism",
    ],
    technologies: [
      "Digital OPG & CBCT Imaging",
      "CAD/CAM Crown Fabrication",
      "Laser Cavity Detection",
      "Intraoral 3D Scanning",
      "Piezoelectric Surgery",
      "Air Polishing System",
    ],
    faqs: [
      {
        question: "How painful is a root canal treatment?",
        answer:
          "Modern root canal therapy is performed under local anesthesia and is virtually painless. Most patients report it feels no worse than getting a routine filling. Post-procedure mild soreness typically resolves within 2–3 days with over-the-counter pain relief.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care — regular brushing, flossing, and dental check-ups — dental implants can last a lifetime. The titanium post fuses with the jawbone (osseointegration) within 3–6 months, creating a stable, long-term foundation for the crown.",
      },
      {
        question: "At what age should children first visit a dentist?",
        answer:
          "We recommend the first dental visit within 6 months of the first tooth appearing or by the child's first birthday. Early visits help establish good oral habits and allow the dentist to identify and prevent potential issues early.",
      },
      {
        question: "How often should I get a dental check-up?",
        answer:
          "Generally, every 6 months is recommended for routine check-ups and professional cleaning. However, patients with gum disease, high cavity risk, or braces may need to visit more frequently — your dentist will advise a personalized schedule.",
      },
      {
        question:
          "What is the difference between fixed braces and clear aligners?",
        answer:
          "Fixed braces use metal or ceramic brackets bonded to teeth and are ideal for complex corrections. Clear aligners (like Invisalign) are removable transparent trays suited for mild to moderate misalignment. Our orthodontist will assess your case and recommend the best option.",
      },
    ],
  },
  {
    id: 2,
    detailedDescription:
      "The Anesthesia department at Ayushman Hospital provides safe, personalized pain management and anesthetic care across all surgical specialties. Our board-certified anesthesiologists conduct thorough pre-operative assessments, administer precisely tailored anesthesia, and manage critical care support during and after every procedure. Patient safety, comfort, and rapid recovery are our top priorities.",
    conditionsTreated: [
      "Acute and chronic surgical pain",
      "Post-operative pain management",
      "Labor and delivery pain (Epidural)",
      "Cancer-related pain",
      "ICU patient sedation",
      "Neuropathic pain syndromes",
      "Pediatric anesthesia needs",
      "Trauma & emergency analgesia",
    ],
    technologies: [
      "BIS (Bispectral Index) Monitoring",
      "Target-Controlled Infusion (TCI)",
      "Ultrasound-Guided Nerve Blocks",
      "Multimodal Analgesia Protocols",
      "Video Laryngoscopy",
      "Rapid Sequence Induction",
    ],
    faqs: [
      {
        question: "Is general anesthesia safe?",
        answer:
          "General anesthesia is extremely safe when administered by qualified anesthesiologists. Before your procedure, you'll have a detailed pre-anesthetic assessment. Your anesthesiologist monitors vital signs continuously throughout surgery and adjusts medications in real time.",
      },
      {
        question:
          "What is the difference between general, regional, and local anesthesia?",
        answer:
          "General anesthesia renders you fully unconscious. Regional anesthesia (e.g., spinal, epidural) numbs a large area while you remain awake or lightly sedated. Local anesthesia numbs only a small, specific area. The type used depends on the procedure, your health, and preferences.",
      },
      {
        question: "Why must I fast before surgery?",
        answer:
          "Fasting prevents aspiration — accidental inhalation of stomach contents into the lungs during anesthesia, which can cause severe pneumonia. You'll receive specific fasting instructions (usually 6–8 hours for solids, 2 hours for clear liquids) based on your scheduled procedure.",
      },
      {
        question: "What are common side effects after anesthesia?",
        answer:
          "Mild nausea, sore throat, drowsiness, and brief confusion are the most common side effects that typically resolve within hours. We use anti-nausea medications routinely and our recovery nurses monitor you closely in the PACU (Post-Anesthesia Care Unit) until you're fully awake.",
      },
      {
        question: "Can I request to be awake during surgery?",
        answer:
          "Yes. For many procedures, regional or spinal anesthesia allows you to remain conscious while feeling no pain. Some surgeries, such as certain brain tumor removals (awake craniotomy), actually require patient cooperation. Discuss your preferences and concerns openly with your anesthesiologist during pre-operative consultation.",
      },
    ],
  },
  {
    id: 3,
    detailedDescription:
      "Our ENT (Ear, Nose & Throat) department provides expert diagnosis and treatment of diseases affecting the head and neck. Using advanced endoscopic and minimally invasive techniques, our specialists treat everything from common ear infections and chronic sinusitis to complex reconstructive head and neck surgeries. We are equipped with state-of-the-art audiological and laryngological diagnostic tools.",
    conditionsTreated: [
      "Chronic sinusitis & nasal polyps",
      "Tonsillitis & adenoid disorders",
      "Hearing loss & tinnitus",
      "Ear infections (Otitis media)",
      "Snoring & sleep apnea",
      "Head & neck tumors",
      "Voice disorders & hoarseness",
      "Deviated nasal septum",
    ],
    technologies: [
      "Functional Endoscopic Sinus Surgery (FESS)",
      "Microlaryngoscopy",
      "Pure Tone Audiometry",
      "Video Nasopharyngoscopy",
      "CO2 Laser Surgery",
      "Tympanometry & OAE Testing",
    ],
    faqs: [
      {
        question: "What causes chronic sinusitis and how is it treated?",
        answer:
          "Chronic sinusitis occurs when the sinuses are inflamed for 12 weeks or more, often due to infection, allergies, nasal polyps, or structural issues. Treatment begins with medications (antibiotics, nasal steroids). If conservative treatment fails, Functional Endoscopic Sinus Surgery (FESS) effectively clears blocked sinuses with minimal downtime.",
      },
      {
        question: "When should tonsils be removed?",
        answer:
          "Tonsillectomy is recommended when you experience 7 or more throat infections in one year, 5 or more per year for two consecutive years, or when enlarged tonsils cause significant breathing difficulties during sleep (obstructive sleep apnea). Your ENT specialist will evaluate frequency, severity, and impact on quality of life.",
      },
      {
        question: "Can hearing loss be restored?",
        answer:
          "It depends on the type. Conductive hearing loss (often due to fluid, ear infections, or ossicle problems) is frequently treatable with medication or surgery. Sensorineural hearing loss (nerve damage) is usually permanent but can be managed with hearing aids or cochlear implants, which can restore functional hearing in severe cases.",
      },
      {
        question: "Is snoring dangerous?",
        answer:
          "Occasional snoring is common, but loud, chronic snoring — especially with pauses in breathing — may indicate obstructive sleep apnea (OSA), a serious condition linked to hypertension, heart disease, and stroke. A sleep study helps diagnose OSA; treatment includes CPAP therapy, weight management, or surgical correction depending on the cause.",
      },
      {
        question: "How do I know if my child has a hearing problem?",
        answer:
          "Watch for signs like not startling at loud sounds, failing to turn toward your voice, delayed speech development, frequently asking 'what?', or turning the TV volume very high. Newborn hearing screening is routine at Ayushman; older children can be tested with painless audiometric exams. Early detection dramatically improves outcomes.",
      },
    ],
  },
  {
    id: 4,
    detailedDescription:
      "The General Medicine department is your first point of contact for a broad range of adult health concerns. Our physicians provide comprehensive diagnostic work-ups, management of acute illnesses, and long-term care for chronic conditions. We coordinate with specialists across all departments to ensure holistic, patient-centered care — from routine health check-ups to complex multi-system disease management.",
    conditionsTreated: [
      "Fever, flu & respiratory infections",
      "Type 1 & Type 2 Diabetes",
      "Hypertension (High blood pressure)",
      "Thyroid disorders",
      "Anemia & blood disorders",
      "Urinary tract infections",
      "Gastrointestinal disorders",
      "Vitamin & nutritional deficiencies",
    ],
    technologies: [
      "Full-body Preventive Health Packages",
      "HbA1c & Lipid Profile Monitoring",
      "24-Hour Ambulatory BP Monitoring",
      "Spirometry & Pulmonary Function Tests",
      "Point-of-Care Rapid Diagnostics",
      "Integrated Chronic Disease Management",
    ],
    faqs: [
      {
        question: "What should I bring to my first consultation?",
        answer:
          "Bring all previous medical records, test reports, prescriptions, and a list of current medications (including supplements). Information about family history of diabetes, hypertension, heart disease, or cancer is also valuable. The more context your physician has, the more accurate and personalized your care plan will be.",
      },
      {
        question: "How is diabetes managed at Ayushman Hospital?",
        answer:
          "Diabetes management involves a combination of medication (oral drugs or insulin based on type and severity), diet counseling with our nutritionist, regular HbA1c monitoring, and screening for complications (eyes, kidneys, nerves, feet). Our Diabetes Care Clinic provides structured follow-ups every 3 months with a multidisciplinary team.",
      },
      {
        question: "When is high blood pressure considered dangerous?",
        answer:
          "Blood pressure above 130/80 mmHg consistently is considered hypertension and requires medical attention. A hypertensive crisis (above 180/120 mmHg) is a medical emergency that can cause stroke or heart attack. At Ayushman, we initiate lifestyle modifications and medications based on individual risk profiles rather than numbers alone.",
      },
      {
        question: "How often should I get a full body health check-up?",
        answer:
          "Adults under 40 with no chronic conditions: once every 2 years. Adults 40–60: annually. Seniors over 60 or those with chronic illnesses: every 6 months. Our comprehensive health packages include blood work, ECG, chest X-ray, urine analysis, BMI assessment, and specialist consultations as needed.",
      },
      {
        question:
          "What is the difference between a GP and a specialist physician?",
        answer:
          "A General Physician (GP) provides holistic, primary care across all organ systems and manages most common illnesses. A specialist focuses on one specific system (e.g., cardiologist for the heart). At Ayushman, our GPs serve as coordinators — they manage your overall health and refer you to the right specialist when needed, ensuring seamless continuity of care.",
      },
    ],
  },
  {
    id: 5,
    detailedDescription:
      "Our Cardiology department offers the full spectrum of heart care — from preventive risk assessment to complex interventional procedures. We use cutting-edge imaging and minimally invasive catheterization techniques to diagnose and treat coronary artery disease, structural heart defects, arrhythmias, and heart failure. Our integrated cardiac rehabilitation program supports patients through recovery and long-term heart health.",
    conditionsTreated: [
      "Coronary artery disease",
      "Heart failure & cardiomyopathy",
      "Arrhythmias & palpitations",
      "Valve disorders",
      "Hypertensive heart disease",
      "Chest pain & angina",
      "Congenital heart defects",
      "Peripheral arterial disease",
    ],
    technologies: [
      "Coronary Angiography & Angioplasty",
      "Intravascular Ultrasound (IVUS)",
      "Fractional Flow Reserve (FFR)",
      "3D Echocardiography",
      "Electrophysiology Studies",
      "Cardiac Rehabilitation Program",
    ],
    faqs: [
      {
        question: "What are the warning signs of a heart attack?",
        answer:
          "Classic symptoms include chest pain or pressure radiating to the left arm, jaw, or back; shortness of breath; cold sweats; nausea; and lightheadedness. Women may experience atypical symptoms like fatigue, back pain, or indigestion. If you suspect a heart attack, call our emergency line immediately — time is muscle.",
      },
      {
        question: "What happens during a coronary angiography?",
        answer:
          "A thin, flexible catheter is inserted through the wrist or groin artery and guided to the coronary arteries. Contrast dye is injected and X-ray images (fluoroscopy) reveal blockages. The procedure takes 30–60 minutes under local anesthesia. If a blockage is found, angioplasty (balloon dilation with stent placement) can be performed immediately.",
      },
      {
        question: "Can heart disease be reversed with lifestyle changes?",
        answer:
          "Significant lifestyle modifications can stabilize and in some cases partially reverse atherosclerosis. A heart-healthy diet (Mediterranean or DASH), regular aerobic exercise, smoking cessation, stress management, and weight control — combined with medications — can dramatically reduce the risk of future cardiac events and improve long-term outcomes.",
      },
      {
        question: "What is an echocardiogram and why might I need one?",
        answer:
          "An echocardiogram is an ultrasound of the heart that visualizes its structure and function — pumping efficiency, valve movement, and wall motion. It's ordered for symptoms like chest pain, shortness of breath, or heart murmurs, or for monitoring known heart conditions. It is painless, radiation-free, and takes about 30–45 minutes.",
      },
      {
        question: "How long is recovery after a heart stent procedure?",
        answer:
          "Most patients go home 1–2 days after an uncomplicated angioplasty with stenting. You'll be prescribed blood-thinning medications (dual antiplatelet therapy) for 6–12 months to prevent stent thrombosis. Light activities resume in 1 week; driving in 1 week; full return to work in 1–2 weeks depending on job type. Our cardiac rehab team will guide your exercise progression.",
      },
    ],
  },
  {
    id: 6,
    detailedDescription:
      "The Orthopedics department at Ayushman Hospital specializes in the diagnosis and treatment of musculoskeletal conditions — bones, joints, ligaments, tendons, and muscles. Our fellowship-trained surgeons use minimally invasive arthroscopic and robotic-assisted techniques to achieve faster recovery with less post-operative pain. From sports injury management to complex spinal disorders and joint replacements, we restore mobility and improve quality of life.",
    conditionsTreated: [
      "Osteoarthritis & rheumatoid arthritis",
      "Sports injuries (ACL, rotator cuff)",
      "Fractures & dislocations",
      "Spinal disc herniation",
      "Scoliosis & kyphosis",
      "Osteoporosis & fragility fractures",
      "Tendonitis & bursitis",
      "Carpal tunnel syndrome",
    ],
    technologies: [
      "Robot-Assisted Joint Replacement",
      "Arthroscopic Surgery",
      "Intraoperative Fluoroscopy (C-Arm)",
      "DEXA Bone Density Scanning",
      "PRP (Platelet-Rich Plasma) Therapy",
      "Computer-Navigated Spine Surgery",
    ],
    faqs: [
      {
        question: "How do I know if I need joint replacement surgery?",
        answer:
          "Candidates for joint replacement typically have severe joint pain that limits daily activities, pain at rest or at night, joint stiffness lasting more than 30 minutes in the morning, and failure to improve with conservative treatments like physiotherapy, medications, and injections. X-rays showing significant cartilage loss (bone-on-bone) confirm surgical candidacy.",
      },
      {
        question: "What is the recovery time after knee replacement?",
        answer:
          "Most patients walk with a walker the same day or next day after surgery. Hospital stay is 3–5 days. By 6 weeks, most can walk without aids; by 3 months, perform most daily activities. Full recovery and return to lower-impact sports occurs around 6–12 months. Our physiotherapy team begins rehabilitation from day one.",
      },
      {
        question: "Is physiotherapy necessary before orthopedic surgery?",
        answer:
          "Yes — prehabilitation (pre-operative physiotherapy) strengthens muscles around the joint, improves range of motion, and reduces post-surgical recovery time significantly. Studies show patients who complete prehab programs recover 2–3 weeks faster and have better functional outcomes at 6 months compared to those who skip it.",
      },
      {
        question: "How are sports injuries treated without surgery?",
        answer:
          "Many sports injuries respond well to conservative management: RICE protocol (Rest, Ice, Compression, Elevation), non-steroidal anti-inflammatory drugs, targeted physiotherapy, and PRP injections. Surgery is considered when the injury is complete (full ligament tear) or when conservative treatment fails after 3–6 months. Our sports medicine physician will guide you through the best recovery pathway.",
      },
      {
        question: "Can osteoporosis be treated?",
        answer:
          "While osteoporosis cannot be fully reversed, its progression can be significantly slowed and fracture risk reduced. Treatment includes calcium and vitamin D supplementation, weight-bearing exercise, fall prevention strategies, and medications such as bisphosphonates. DEXA scans every 1–2 years monitor bone density response to therapy.",
      },
    ],
  },
];
