const doctors = [
  {
    id: "D001",
    name: "Dr. Ashish Ganjare",
    specialty: "Consultant Critical Care",
    qualification: "M.D (TMH), IDCC",
    image: "images/d1.jpg",
    about: "Expert in intensive care and emergency response systems with over 10 years of experience."
  },
  {
    id: "D002",
    name: "Dr. Vikas Gupta",
    specialty: "Consultant Critical Care & Physician",
    qualification: "MD (Medicine), IDCC",
    image: "images/d2.jpg",
    about: "Known for precision diagnosis and managing multi-system disorders."
  },
  {
    id: "D003",
    name: "Dr. Anant Singh Rajput",
    specialty: "Critical Care & Anesthesiology",
    qualification: "MD Anesth. (KEMH), IDCC",
    image: "images/d3.jpg",
    about: "Specializes in anesthesia for high-risk patients and ICU care."
  },
  {
    id: "D004",
    name: "Dr. Parikshit Mahajan",
    specialty: "Critical Care Consultant",
    qualification: "MBBS (GMC), MD (Mumbai)",
    image: "images/d4.jpg",
    about: "Respected for leadership in trauma response protocols."
  },
  {
    id: "D005",
    name: "Dr. Sneha Kulkarni",
    specialty: "Child Specialist",
    qualification: "MD Pediatrics",
    image: "images/d5.jpg",
    about: "Compassionate pediatrician with a focus on child development and care."
  },
  {
    id: "D006",
    name: "Dr. Anjali Akhuj",
    specialty: "Infection Control Officer",
    qualification: "M.D (Microbiology), IDCC",
    image: "images/d6.jpg",
    about: "Expert in infection prevention and hospital safety."
  },
  {
    id: "D007",
    name: "Dr. Sonali P. Mahajan",
    specialty: "Ophthalmologist",
    qualification: "D.O.M.S., F.C.S., F.C.O",
    image: "images/d7.jpg",
    about: "Cornea, LASIK and Phaco Surgeon, formerly with Mahatme Eye Hospital."
  },
  {
    id: "D008",
    name: "Dr. Garima Chadda",
    specialty: "Vitero Retinal Surgeon & Neuro Ophthalmologist",
    qualification: "M.S, D.N.B (Ophthal), F.V.R.S",
    image: "images/d8.jpg",
    about: "Focuses on complex retinal surgeries and visual disorders."
  },
  {
    id: "D009",
    name: "Dr. Neha Shinde",
    specialty: "Neurologist",
    qualification: "DM Neurology",
    image: "images/d9.jpg",
    about: "Deals with stroke, epilepsy, and neuromuscular disorders."
  },
  {
    id: "D010",
    name: "Dr. Amit Sinha",
    specialty: "General & Laparoscopic Surgeon",
    qualification: "MS General Surgery",
    image: "images/d10.jpg",
    about: "Renowned for precision in laparoscopic surgeries."
  }
];

function validateDoctor(name, id) {
  return doctors.find(doc => doc.name === name && doc.id === id);
}

function getDoctorById(id) {
  return doctors.find(doc => doc.id === id);
}
