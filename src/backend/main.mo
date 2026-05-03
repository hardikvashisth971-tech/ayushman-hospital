import List "mo:core/List";
import ApptTypes "types/appointment";
import DeptTypes "types/department";
import DocTypes "types/doctor";
import DepartmentLib "lib/department";
import DoctorLib "lib/doctor";
import AppointmentMixin "mixins/appointment-api";
import DepartmentMixin "mixins/department-api";
import DoctorMixin "mixins/doctor-api";
import HospitalMixin "mixins/hospital-api";

actor {
  let appointments = List.empty<ApptTypes.Appointment>();
  let nextIdBox = { var value : Nat = 0 };

  let departments = List.empty<DeptTypes.Department>();
  let doctors = List.empty<DocTypes.Doctor>();

  DepartmentLib.seedData(departments);
  DoctorLib.seedData(doctors);

  include AppointmentMixin(appointments, nextIdBox);
  include DepartmentMixin(departments);
  include DoctorMixin(doctors);
  include HospitalMixin();
};
