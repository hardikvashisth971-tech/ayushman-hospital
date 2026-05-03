import Common "../types/common";
import DocTypes "../types/doctor";
import List "mo:core/List";

module {
  public type Doctor = DocTypes.Doctor;

  public func getAll(
    doctors : List.List<Doctor>
  ) : [Doctor] {
    doctors.toArray()
  };

  public func getById(
    doctors : List.List<Doctor>,
    id : Common.DoctorId
  ) : ?Doctor {
    doctors.find(func(d) { d.id == id })
  };

  public func getByDepartment(
    doctors : List.List<Doctor>,
    departmentId : Common.DepartmentId
  ) : [Doctor] {
    doctors.filter(func(d) { d.departmentId == departmentId }).toArray()
  };

  public func seedData(
    doctors : List.List<Doctor>
  ) : () {
    if (not doctors.isEmpty()) { return };
    let seeds : [Doctor] = [
      {
        id = 1;
        name = "Dr. Rajesh Sharma";
        qualification = "MBBS, MD (Cardiology), DM";
        specialty = "Interventional Cardiologist";
        departmentId = 1;
        yearsOfExperience = 18;
        consultationFee = 800;
        bio = "Dr. Rajesh Sharma is a senior interventional cardiologist with over 18 years of experience. He has performed more than 5000 angioplasties and is recognised for his expertise in complex coronary interventions.";
        consultationHours = { days = "Mon-Sat"; startTime = "10:00"; endTime = "14:00" };
        imageUrl = "";
      },
      {
        id = 2;
        name = "Dr. Priya Mehta";
        qualification = "MBBS, MS (Orthopaedics), DNB";
        specialty = "Joint Replacement Surgeon";
        departmentId = 2;
        yearsOfExperience = 14;
        consultationFee = 700;
        bio = "Dr. Priya Mehta specialises in knee and hip replacement surgeries. With 14 years of experience, she has helped thousands of patients regain their mobility and quality of life.";
        consultationHours = { days = "Mon-Fri"; startTime = "09:00"; endTime = "13:00" };
        imageUrl = "";
      },
      {
        id = 3;
        name = "Dr. Anil Verma";
        qualification = "MBBS, MD (Neurology), DM";
        specialty = "Senior Neurologist";
        departmentId = 3;
        yearsOfExperience = 20;
        consultationFee = 900;
        bio = "Dr. Anil Verma is a leading neurologist with two decades of experience in diagnosing and treating complex neurological disorders including stroke, epilepsy and movement disorders.";
        consultationHours = { days = "Mon, Wed, Fri"; startTime = "11:00"; endTime = "15:00" };
        imageUrl = "";
      },
      {
        id = 4;
        name = "Dr. Sunita Patel";
        qualification = "MBBS, MS (Gynaecology), DGO";
        specialty = "Obstetrician & Gynaecologist";
        departmentId = 4;
        yearsOfExperience = 16;
        consultationFee = 600;
        bio = "Dr. Sunita Patel is a renowned obstetrician and gynaecologist who has delivered over 3000 babies. She is known for her gentle approach and expertise in high-risk pregnancies.";
        consultationHours = { days = "Mon-Sat"; startTime = "09:00"; endTime = "12:00" };
        imageUrl = "";
      },
      {
        id = 5;
        name = "Dr. Manoj Gupta";
        qualification = "MBBS, MS (ENT), DNB";
        specialty = "ENT Specialist";
        departmentId = 5;
        yearsOfExperience = 12;
        consultationFee = 500;
        bio = "Dr. Manoj Gupta is an experienced ENT surgeon specialising in endoscopic sinus surgery and cochlear implants, with 12 years of dedicated practice.";
        consultationHours = { days = "Tue, Thu, Sat"; startTime = "10:00"; endTime = "14:00" };
        imageUrl = "";
      },
      {
        id = 6;
        name = "Dr. Kavita Joshi";
        qualification = "BDS, MDS (Oral Surgery)";
        specialty = "Oral & Maxillofacial Surgeon";
        departmentId = 6;
        yearsOfExperience = 10;
        consultationFee = 450;
        bio = "Dr. Kavita Joshi is an expert in complex dental surgeries and implant procedures. She is dedicated to pain-free dentistry and transforming smiles.";
        consultationHours = { days = "Mon-Sat"; startTime = "10:00"; endTime = "17:00" };
        imageUrl = "";
      },
      {
        id = 7;
        name = "Dr. Ramesh Tiwari";
        qualification = "MBBS, MD (General Medicine)";
        specialty = "General Physician";
        departmentId = 7;
        yearsOfExperience = 22;
        consultationFee = 400;
        bio = "Dr. Ramesh Tiwari is a highly experienced general physician known for his thorough diagnostic approach and patient-centric care across all age groups.";
        consultationHours = { days = "Mon-Sat"; startTime = "08:00"; endTime = "11:00" };
        imageUrl = "";
      },
      {
        id = 8;
        name = "Dr. Deepa Singh";
        qualification = "MBBS, MD (Paediatrics), DCH";
        specialty = "Paediatrician & Neonatologist";
        departmentId = 8;
        yearsOfExperience = 15;
        consultationFee = 550;
        bio = "Dr. Deepa Singh is a compassionate paediatrician and neonatologist providing expert care for newborns and children. She is known for her gentle bedside manner.";
        consultationHours = { days = "Mon-Fri"; startTime = "09:00"; endTime = "13:00" };
        imageUrl = "";
      }
    ];
    for (doc in seeds.vals()) {
      doctors.add(doc);
    };
  };
}
