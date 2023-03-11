const registrationForm = document.getElementById("registrationForm");
    const dataTable = document
      .getElementById("dataTable")
      .getElementsByTagName("tbody")[0];

    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const dob = document.getElementById("dob").value;
      const password = document.getElementById("password").value;
      const terms = document.getElementById("terms").checked;

      const today = new Date();
      const dobDate = new Date(dob);
      const age = today.getFullYear() - dobDate.getFullYear();

      // Check if age is between 18 and 55
      if (age < 18 || age > 55) {
        alert("Age should be between 18 and 55 years.");
        return;
      }

      // Save form data to localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("dob", dob);
      localStorage.setItem("password", password);
      localStorage.setItem("terms", terms);

      // Add form data to table
      const row = dataTable.insertRow();
      const nameCell = row.insertCell();
      const emailCell = row.insertCell();
      const dobCell = row.insertCell();
      const passwordcell=row.insertCell();
      const termscell=row.insertCell();


      nameCell.innerHTML = name;
      emailCell.innerHTML = email;
      dobCell.innerHTML = dob;
      passwordcell.innerHTML=password;
      termscell.innerHTML=terms;


      // Reset form fields
      registrationForm.reset();

      alert("Registration successful.");
    });

    // Retrieve form data from localStorage
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedDob = localStorage.getItem("dob");
    const savedPassword = localStorage.getItem("password");
    const savedTerms = localStorage.getItem("terms");

    // Display saved form data in table
    if (savedName && savedEmail && savedDob && savedPassword && savedTerms) {
      const row = dataTable.insertRow();
      const nameCell = row.insertCell();
      const emailCell = row.insertCell();
      const dobCell = row.insertCell();
      const passwordcell=row.insertCell();
      const termscell=row.insertCell();



      nameCell.innerHTML = savedName;
      emailCell.innerHTML = savedEmail;
      dobCell.innerHTML = savedDob;
      passwordcell.innerHTML=savedPassword;
      termscell.innerHTML=savedTerms;
    }