import Common "common";

module {
  public type ConsultationHours = {
    days : Text;      // e.g. "Mon-Fri"
    startTime : Text; // e.g. "09:00"
    endTime : Text;   // e.g. "17:00"
  };

  public type Doctor = {
    id : Common.DoctorId;
    name : Text;
    qualification : Text;
    specialty : Text;
    departmentId : Common.DepartmentId;
    yearsOfExperience : Nat;
    consultationFee : Nat;
    bio : Text;
    consultationHours : ConsultationHours;
    imageUrl : Text;
  };
}
