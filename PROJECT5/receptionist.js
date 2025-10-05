window.onload = function () {
  const now = new Date();
  document.getElementById("currentDate").value = now.toISOString().split('T')[0];
  document.getElementById("currentTime").value = now.toLocaleTimeString();

  const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
  savedPatients.forEach(displayPatientInList);
};

document.getElementById('patientForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("patientName").value;
  const age = document.getElementById("patientAge").value;
  const gender = document.getElementById("patientGender").value;
  const contact = document.getElementById("patientContact").value;
  const appointmentTime = document.getElementById("appointmentTime").value;
  const date = document.getElementById("currentDate").value;
  const time = document.getElementById("currentTime").value;
  const charges = document.getElementById("charges").value;
  const assignedDoctor = document.getElementById("assignedDoctor").value;
  const issue = document.getElementById("patientIssue").value;
  const token = "TKN" + Math.floor(Math.random() * 10000);

  const patientData = {
    token, name, age, gender, contact, date, time, appointmentTime, charges, assignedDoctor, issue
  };

  // Save to general patient list
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  patients.push(patientData);
  localStorage.setItem("patients", JSON.stringify(patients));

  // ✅ Save to doctor-specific list
  const doctorPatients = JSON.parse(localStorage.getItem(assignedDoctor)) || [];
  doctorPatients.push(patientData);
  localStorage.setItem(assignedDoctor, JSON.stringify(doctorPatients));

  displayPatientInList(patientData);

  const html = `
    <h2>Aureus Hospital - Appointment Receipt</h2>
    <p><strong>Token:</strong> ${token}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
    <p><strong>Assigned Doctor:</strong> ${assignedDoctor}</p>
    <p><strong>Patient Issue:</strong> ${issue}</p>
    <p><strong>Charges:</strong> ₹${charges}</p>
  `;

  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; }
          h2 { color: #007b7d; }
          p { margin: 10px 0; }
        </style>
      </head>
      <body>
        ${html}
        <script>window.onload = function() { window.print(); }</script>
      </body>
    </html>
  `);
  printWindow.document.close();

  document.getElementById("patientForm").reset();
});

function displayPatientInList(patient) {
  const list = document.getElementById("patientList");
  const li = document.createElement("li");
  li.id = patient.token;
  li.textContent = `${patient.token} - ${patient.name}, ${patient.appointmentTime}`;
  list.appendChild(li);

  // Add to delete dropdown
  const select = document.getElementById("deleteSelect");
  const option = document.createElement("option");
  option.value = patient.token;
  option.text = `${patient.token} - ${patient.name}`;
  select.appendChild(option);
}

function deleteSelectedPatient() {
  const select = document.getElementById("deleteSelect");
  const token = select.value;
  if (!token) return alert("Please select a patient to delete.");

  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  const patientToDelete = patients.find(p => p.token === token);

  // Remove from general list
  patients = patients.filter(p => p.token !== token);
  localStorage.setItem("patients", JSON.stringify(patients));

  // ✅ Remove from doctor-specific list
  if (patientToDelete && patientToDelete.assignedDoctor) {
    let doctorList = JSON.parse(localStorage.getItem(patientToDelete.assignedDoctor)) || [];
    doctorList = doctorList.filter(p => p.token !== token);
    localStorage.setItem(patientToDelete.assignedDoctor, JSON.stringify(doctorList));
  }

  const li = document.getElementById(token);
  if (li) li.remove();

  select.querySelector(`option[value="${token}"]`).remove();
  select.value = "";
}
