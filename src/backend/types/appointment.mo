import Common "common";

module {
  public type TimeSlot = {
    startTime : Text; // e.g. "09:00"
    endTime : Text;   // e.g. "09:30"
  };

  public type AppointmentStatus = {
    #pending;
    #confirmed;
    #cancelled;
  };

  public type AppointmentRequest = {
    patientName : Text;
    patientPhone : Text;
    patientEmail : Text;
    departmentId : Common.DepartmentId;
    doctorId : Common.DoctorId;
    date : Text; // ISO date string "YYYY-MM-DD"
    timeSlot : TimeSlot;
    notes : Text;
  };

  public type Appointment = {
    id : Common.AppointmentId;
    patientName : Text;
    patientPhone : Text;
    patientEmail : Text;
    departmentId : Common.DepartmentId;
    doctorId : Common.DoctorId;
    date : Text;
    timeSlot : TimeSlot;
    notes : Text;
    status : AppointmentStatus;
    createdAt : Common.Timestamp;
  };
}
