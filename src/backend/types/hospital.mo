module {
  public type WorkingHours = {
    days : Text;
    startTime : Text;
    endTime : Text;
  };

  public type HospitalInfo = {
    name : Text;
    address : Text;
    city : Text;
    state : Text;
    pincode : Text;
    phone : Text;
    emergencyPhone : Text;
    email : Text;
    website : Text;
    workingHours : [WorkingHours];
    about : Text;
    establishedYear : Nat;
    totalBeds : Nat;
  };
}
