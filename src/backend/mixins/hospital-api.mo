import HospTypes "../types/hospital";
import HospitalLib "../lib/hospital";

mixin () {
  public query func getHospitalInfo() : async HospTypes.HospitalInfo {
    HospitalLib.getInfo()
  };
}
