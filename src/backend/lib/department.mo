import DeptTypes "../types/department";
import List "mo:core/List";

module {
  public type Department = DeptTypes.Department;

  public func getAll(
    departments : List.List<Department>
  ) : [Department] {
    departments.toArray()
  };

  public func getById(
    departments : List.List<Department>,
    id : Nat
  ) : ?Department {
    departments.find(func(d) { d.id == id })
  };

  public func seedData(
    departments : List.List<Department>
  ) : () {
    if (not departments.isEmpty()) { return };
    let seeds : [Department] = [
      {
        id = 1;
        name = "Cardiology";
        description = "Comprehensive diagnosis and treatment of heart and cardiovascular diseases.";
        iconName = "heart";
        keyTreatments = ["Angioplasty", "Bypass Surgery", "Echocardiography", "Holter Monitoring"];
        availableEquipment = ["Echocardiogram Machine", "Stress Test Equipment", "Cardiac Catheterization Lab"];
      },
      {
        id = 2;
        name = "Orthopaedics";
        description = "Expert care for bone, joint, muscle and spine conditions.";
        iconName = "bone";
        keyTreatments = ["Joint Replacement", "Arthroscopy", "Fracture Management", "Spine Surgery"];
        availableEquipment = ["Digital X-Ray", "MRI", "CT Scan", "Bone Densitometry"];
      },
      {
        id = 3;
        name = "Neurology";
        description = "Advanced diagnosis and management of disorders of the nervous system.";
        iconName = "brain";
        keyTreatments = ["Stroke Treatment", "Epilepsy Management", "Migraine Therapy", "EEG"];
        availableEquipment = ["EEG Machine", "EMG Machine", "MRI", "CT Scan"];
      },
      {
        id = 4;
        name = "Gynaecology";
        description = "Complete women's health services including maternity and reproductive care.";
        iconName = "ribbon";
        keyTreatments = ["Normal Delivery", "C-Section", "Laparoscopy", "Hysteroscopy"];
        availableEquipment = ["Ultrasound", "Colposcope", "Foetal Monitor", "Laparoscopic Tower"];
      },
      {
        id = 5;
        name = "ENT";
        description = "Ear, nose and throat disorders diagnosis and surgical management.";
        iconName = "ear";
        keyTreatments = ["Tonsillectomy", "Sinus Surgery", "Hearing Assessment", "Cochlear Implant"];
        availableEquipment = ["Audiometer", "Endoscope", "Tympanometer", "Operating Microscope"];
      },
      {
        id = 6;
        name = "Dentistry";
        description = "Comprehensive oral and dental care for patients of all ages.";
        iconName = "tooth";
        keyTreatments = ["Root Canal", "Dental Implants", "Orthodontics", "Teeth Whitening"];
        availableEquipment = ["Dental X-Ray", "OPG Machine", "Dental Chair", "Laser Unit"];
      },
      {
        id = 7;
        name = "General Medicine";
        description = "Primary care and management of common medical conditions.";
        iconName = "stethoscope";
        keyTreatments = ["Fever Management", "Diabetes Care", "Hypertension", "Respiratory Infections"];
        availableEquipment = ["ECG Machine", "Spirometer", "Glucometer", "Pulse Oximeter"];
      },
      {
        id = 8;
        name = "Paediatrics";
        description = "Specialised healthcare for infants, children and adolescents.";
        iconName = "baby";
        keyTreatments = ["Vaccination", "Growth Monitoring", "Neonatal Care", "Paediatric Surgery"];
        availableEquipment = ["Neonatal Incubator", "Paediatric Ventilator", "Infant Warmer", "Phototherapy Unit"];
      }
    ];
    for (dept in seeds.vals()) {
      departments.add(dept);
    };
  };
}
