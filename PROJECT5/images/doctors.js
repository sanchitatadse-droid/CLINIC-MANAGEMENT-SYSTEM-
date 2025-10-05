// doctors.js
const doctors = [
    { id: "D001", name: "Dr. Ashish Ganjare" },
    { id: "D002", name: "Dr. Vikas Gupta" },
    { id: "D003", name: "Dr. Anant Singh Rajput" },
    { id: "D004", name: "Dr. Parikshit Mahajan" },
    { id: "D005", name: "Dr. Sneha Kulkarni" },
    { id: "D006", name: "Dr. Anjali Akhuj" },
    { id: "D007", name: "Dr. Sonali P. Mahajan" },
    { id: "D008", name: "Dr. Garima Chadda" },
    { id: "D009", name: "Dr. Neha Shinde" },
    { id: "D010", name: "Dr. Amit Sinha" }
  ];
  
  function validateDoctor(name, id) {
    name = name.trim().toLowerCase();
    id = id.trim().toUpperCase();
  
    return doctors.find(doc =>
      doc.name.toLowerCase() === name && doc.id.toUpperCase() === id
    );
  }
  