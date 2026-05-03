import HospTypes "../types/hospital";

module {
  public type HospitalInfo = HospTypes.HospitalInfo;

  public func getInfo() : HospitalInfo {
    {
      name = "Ayushman Hospital";
      address = "123, MG Road, Civil Lines";
      city = "Indore";
      state = "Madhya Pradesh";
      pincode = "452001";
      phone = "+91-731-2500100";
      emergencyPhone = "+91-731-2500911";
      email = "info@ayushmanhospital.in";
      website = "www.ayushmanhospital.in";
      workingHours = [
        { days = "Monday - Saturday"; startTime = "08:00"; endTime = "20:00" },
        { days = "Sunday"; startTime = "09:00"; endTime = "14:00" },
        { days = "Emergency"; startTime = "00:00"; endTime = "23:59" }
      ];
      about = "Ayushman Hospital is a leading multi-specialty healthcare institution committed to delivering world-class medical care. Founded with the vision of making quality healthcare accessible to all, we combine cutting-edge technology with compassionate service to serve our community.";
      establishedYear = 2005;
      totalBeds = 350;
    }
  };
}
