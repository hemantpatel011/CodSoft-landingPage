function submitForm() {
    console.log("Submited!!");
  
    const fn = document.getElementById("fullName").value.trim();
    const em = document.getElementById("email").value.trim();
    const mn = document.getElementById("mobileNumber").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const g_name = document.getElementById("GFN").value.trim();
    const g_num = document.getElementById("GCN").value.trim();
    const r_adderss = document.getElementById("RA").value.trim();
    const city = document.getElementById("city").value.trim();
    const p_code = document.getElementById("pinCode").value.trim();
    const LCQ = document.getElementById("LCQ").value.trim();
    const grade = document.getElementById("grade").value.trim();
    const p_course = document.getElementById("PC").value.trim();
    const b_timing = document.getElementById("BTF").value.trim();
    const h_aboutus = document.getElementById("aboutus").value.trim();
    const s_required = document.getElementById("SR").value.trim();
    
    //For Invalid Full Name
    if (fn.length < 2) {
      document.getElementById("fullName").classList.add("border-danger");
      document.getElementById("nameError").classList.add("text-danger");
      document.getElementById("nameError").innerText =
        "Please enter a valid name";
    }
     else if (!/^[A-Za-z/s]+$/.test(fn)) {
      document.getElementById("fullName").classList.add("border-danger");
      document.getElementById("nameError").classList.add("text-danger");
      document.getElementById("nameError").innerText =
        "Please enter a valid name";
    }
    // For valid Full Name
    if (fn.length > 2 && /^[A-Za-z/s]+$/.test(fn)) {
      document.getElementById("fullName").classList.remove("border-danger");
      document.getElementById("nameError").innerText = "";
    }
  
  //   For Invalid Email
    if (!/^[A-Za-z\d._]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)) {
      document.getElementById("email").classList.add("border-danger");
      document.getElementById("emailError").classList.add("text-danger");
      document.getElementById("emailError").innerText =
       "Please enter a valid email address";
    }
    // For valid Email
    if (/^[A-Za-z\d._]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)) {
      document.getElementById("email").classList.remove("border-danger");
      document.getElementById("emailError").innerText = "";
    }
  
  //   For invalid Mobile Number
    if (!/^[6-9]\d{9}$/.test(mn)) {
      document.getElementById("mobileNumber").classList.add("border-danger");
      document.getElementById("mobileError").classList.add("text-danger");
      document.getElementById("mobileError").innerText =
        "Enter a 10-digit Indian mobile number";
    }
    //   For valid Mobile Number
    if (/^[6-9]\d{9}$/.test(mn)) {
      document.getElementById("mobileNumber").classList.remove("border-danger");
      document.getElementById("mobileError").innerText =
        "";
    }
  
     //For Invalid Guardian's Name
     if (g_name.length < 2) {
      document.getElementById("GFN").classList.add("border-danger");
      document.getElementById("g_nameError").classList.add("text-danger");
      document.getElementById("g_nameError").innerText =
        "Enter guardian's full name";
    }
     else if (!/^[A-Za-z/s]+$/.test(g_name)) {
      document.getElementById("GFN").classList.add("border-danger");
      document.getElementById("g_nameError").classList.add("text-danger");
      document.getElementById("g_nameError").innerText =
        "Enter guardian's full name";
    }
    // For valid Guardian's Full Name
    if (fn.length > 2 && /^[A-Za-z/s]+$/.test(g_name)) {
      document.getElementById("GFN").classList.remove("border-danger");
      document.getElementById("g_nameError").innerText = "";
    }
  
    //   For invalid Guardian's Mobile Number
    if (!/^[6-9]\d{9}$/.test(g_num)) {
      document.getElementById("GCN").classList.add("border-danger");
      document.getElementById("g_numError").classList.add("text-danger");
      document.getElementById("g_numError").innerText =
        "Enter a valid 10-digit contact number";
    }
    //   For valid Guardian's Mobile Number
    if (/^[6-9]\d{9}$/.test(g_num)) {
      document.getElementById("GCN").classList.remove("border-danger");
      document.getElementById("g_numError").innerText =
        "";
    }
  
  //   For invalid Address
    if (r_adderss.length < 15) {
      document.getElementById("RA").classList.add("border-danger");
      document.getElementById("addressError").classList.add("text-danger");
      document.getElementById("addressError").innerText =
        "Enter your full address";
    }
     else if (!/^[A-Za-z .2,]+$/.test(r_adderss)) {
      document.getElementById("RA").classList.add("border-danger");
      document.getElementById("addressError").classList.add("text-danger");
      document.getElementById("addressError").innerText =
        "Enter your full address";
    }
  
    // For valid Address
    if (r_adderss.length > 15 && /^[A-Za-z ./2,-]+$/.test(r_adderss)) {
      document.getElementById("RA").classList.remove("border-danger");
      document.getElementById("addressError").innerText = "";
    }
  
  //   For invalid city
    if (city.length < 3 || !/^[A-Za-z ]+$/.test(city)) {
      document.getElementById("city").classList.add("border-danger");
      document.getElementById("cityError").classList.add("text-danger");
      document.getElementById("cityError").innerText =
        "Please enter a valid city name";
    }
    // For valid city
    if (city.length >= 3 && /^[A-Za-z ]+$/.test(city)) {
      document.getElementById("city").classList.remove("border-danger");
      document.getElementById("cityError").innerText = "";
    }
  
    //   For invalid pin code
    if (pinCode.length !== 6) {
      document.getElementById("pinCode").classList.add("border-danger");
      document.getElementById("pinCodeError").classList.add("text-danger");
      document.getElementById("pinCodeError").innerText =
        "Please enter a valid city name";
    }
      // For valid pin code
      if (city.length === 6) {
          document.getElementById("pinCode").classList.remove("border-danger");
          document.getElementById("pinCodeError").innerText = "";
        }
  
  // DOB Validation
        let age = new Date().getFullYear()-Number(dob.split("-")[0]);
        if(age <= 16)
        {
          document.getElementById("dob").classList.add("border-danger");
          document.getElementById("dobError").classList.add("text-danger");
          document.getElementById("dobError").innerText =
            "You must be at least 16 years old";
        }
  
        if(age >= 16){
          document.getElementById("dob").classList.remove("border-danger");
          document.getElementById("dobError").innerText = "";
        }
      
  
    console.log(fn);
    console.log(em);
    console.log(mn);
    console.log(dob);
    console.log(g_name);
    console.log(g_num);
    console.log(r_adderss);
    console.log(city);
    console.log(p_code);
    console.log(LCQ);
    console.log(p_course);
    console.log(grade);
    console.log(b_timing);
    console.log(h_aboutus);
    console.log(s_required);
  }