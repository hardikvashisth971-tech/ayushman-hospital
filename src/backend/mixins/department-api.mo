import DeptTypes "../types/department";
import DepartmentLib "../lib/department";
import List "mo:core/List";

mixin (departments : List.List<DeptTypes.Department>) {
  public query func getDepartments() : async [DeptTypes.Department] {
    DepartmentLib.getAll(departments)
  };

  public query func getDepartment(id : Nat) : async ?DeptTypes.Department {
    DepartmentLib.getById(departments, id)
  };
}
