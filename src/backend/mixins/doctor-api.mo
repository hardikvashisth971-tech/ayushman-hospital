import Common "../types/common";
import DocTypes "../types/doctor";
import DoctorLib "../lib/doctor";
import List "mo:core/List";

mixin (doctors : List.List<DocTypes.Doctor>) {
  public query func getDoctors() : async [DocTypes.Doctor] {
    DoctorLib.getAll(doctors)
  };

  public query func getDoctor(id : Common.DoctorId) : async ?DocTypes.Doctor {
    DoctorLib.getById(doctors, id)
  };

  public query func getDoctorsByDepartment(departmentId : Common.DepartmentId) : async [DocTypes.Doctor] {
    DoctorLib.getByDepartment(doctors, departmentId)
  };
}
